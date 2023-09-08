import React from "react";
import { useParams } from "react-router";

const Number = () => {
    const { number } = useParams();

    return (
        <div>
            <h1>{number}</h1>
        </div>
    );
};
export default Number;