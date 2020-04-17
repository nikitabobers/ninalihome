import { useState, useEffect, useLayoutEffect } from "react";

const useBeforeFirstRender = (f) => {
    f();
    const [hasRendered, setHasRendered] = useState(false);
    // useLayoutEffect(() => setHasRendered(true), [hasRendered]);
    // if (!hasRendered) {
    //     f();
    // }
};

export default useBeforeFirstRender;
