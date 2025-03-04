import { useState, useEffect } from "react";
export function useDelayRender(delay){
    const [render, setRender] = useState(false);

    useEffect(() =>{
    const timeOut = setTimeout(() => {
            setRender(true);
        }, delay);
        // clean-up
        return () => clearTimeout(timeOut);
    }, [render]); // delay after each reload
    // returning the status of state
    return render;
};
