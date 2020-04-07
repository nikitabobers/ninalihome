import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./components/pages/Home";
import About from "./components/pages/About";
import Header from "./components/layout/header/Header";
import Contact from "./components/pages/Contact";
import Blog from "./components/pages/Blog";

function App() {
    return (
        <Router>
            <Header />
            <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/about" component={About} />
                <Route exact path="/blog" component={Blog} />
                <Route exact path="/contact" component={Contact} />
            </Switch>
        </Router>
    );
}

export default App;

// import React from "react";
// import "./panelTop.css";

// const PanelTop = () => {
//     return (
//         <div className="panel">
//             <div className="panel__item">
//                 <i className="fas fa-map-marker-alt"></i>
//                 <span>Shipping to Denmark</span>
//             </div>
//             <div className="panel__item-flex">
//                 <small>en</small>
//                 <p>Login</p>
//             </div>
//         </div>
//     );
// };

// export default PanelTop;
