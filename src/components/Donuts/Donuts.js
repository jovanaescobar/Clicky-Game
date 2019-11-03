import React from "react";
import "./Donuts.css";

<<<<<<< HEAD

function Donuts(props) {
    return (
      <div className="donuts img-container">
            <img alt={props.name} src={props.image} id={props.id}
            onClick={() => props.shuffleDonuts(props.id)} className='shuffleDonuts' />
            
        </div>
         
    );
  }


export default Donuts;
=======
function Donuts(props) {
    return (
      <div className="donuts img-container">
           <img alt={props.name} src={props.image} id={props.id}
            onClick={() => props.shuffleDonuts(props.id)} className='shuffleDonuts' />
            </div>    
    );
  }

export default Donuts;
>>>>>>> e7b23b1e178e9ad295ee001faddda25322846086
