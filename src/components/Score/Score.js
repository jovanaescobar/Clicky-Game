import React from "react";
import "./Score.css";


function Score (props) {
    return <div className="gameStart">
      <h1 className="title">DONUTS! {props.title}</h1>
      <h4 className="rules">CLICK A DONUT TO BEGIN {props.rules}</h4>
      <h3 className="total">Total Sequence: {props.total}</h3>
      
    </div>
};



export default Score;

