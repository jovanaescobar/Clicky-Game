import React from "react";
import "./Donuts.css";

function Donuts(props) {
    return (
      <div className="donuts img-container">
            <img alt={props.name} src={props.image} id={props.id}/>
            </div>    
    );
  }

export default Donuts;
