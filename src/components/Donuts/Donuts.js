import React from "react";
import "./Donuts.css";

function Donuts(props) {
    return (
      <div className="donuts img-container">
           <img alt={props.name} src={props.image} id={props.id}
            onClick={() => props.shuffleDonuts(props.id)} className='shuffleDonuts' />
            </div>    
    );
  }

export default Donuts;
