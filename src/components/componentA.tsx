import React, { useState } from "react";
import { useDispatch } from "react-redux";

const ComponentA = () => {
    const [value1, setValue1] = useState(0);
    const [value2, setValue2] = useState(0);
    const dispatch = useDispatch();

    return (
        <div>
            <input type="number" onChange={(e) => setValue1(Number(e.target.value))} />
            <br />
            <input type="number" onChange={(e) => setValue2(Number(e.target.value))} />
            <div>
                <button
                    onClick={() => dispatch({ type: "+", payload: { value1, value2 } })}
                >
                    +
                </button>
                <button
                    onClick={() => dispatch({ type: "-", payload: { value1, value2 } })}
                >
                    -
                </button>
                <button
                    onClick={() => dispatch({ type: "*", payload: { value1, value2 } })}
                >
                    *
                </button>
                <button
                    onClick={() => dispatch({ type: "/", payload: { value1, value2 } })}
                >
                    /
                </button>
            </div>
        </div>
    );
};

export default ComponentA;