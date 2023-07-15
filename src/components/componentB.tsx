import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../store";

const ComponentB = () => {
    const result = useSelector((state: RootState) => state.calculation.result)

    return <div>Bằng: {result}</div>;
};

export default ComponentB;