const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const auth = require("../middleware/auth");
const config = require("config");
const { check, validationResult } = require("express-validator");
const User = require("../models/UserModel");

// @route   POST api/user/register
// @desc    Create a admin user
// @access  Private

router.post(
    "/register",
    [
        check("name", "Please add name").not().isEmpty(),
        check(
            "password",
            "Please enter a password with 3 or more characters"
        ).isLength({ min: 3 }),
    ],
    async (req, res) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }

        try {
            const { name, password } = req.body;

            let user = await User.findOne({ name });

            user = new User({
                name: "admin",
                password: "1234",
                isAdmin: true,
            });

            const salt = await bcrypt.genSalt(10);

            user.password = await bcrypt.hash(password, salt);

            const newUser = await user.save();

            const payload = {
                user: {
                    id: user.id,
                },
            };

            jwt.sign(
                payload,
                config.get("jwtSecret"),
                { expiresIn: 360000 },
                (err, token) => {
                    if (err) throw err;
                    res.json({ token });
                }
            );

            res.send(newUser);
        } catch (error) {
            res.send({ message: error.message });
        }
    }
);

module.exports = router;
