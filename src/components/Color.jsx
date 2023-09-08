import React from "react";
import { useParams } from "react-router";

const Color = () => {
    const { word } = useParams();
    const { bgcolor } = useParams();
    const { txtcolor } = useParams();
    const style = {
        backgroundColor: bgcolor,
        color: txtcolor
    };
    return (
        <div style={style}>
            {
            isNaN(word)? 
            (<h2>{word}</h2>):(<></>)
            }
        </div>
    );
};
export default Color;