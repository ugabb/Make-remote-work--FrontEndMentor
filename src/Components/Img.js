import React from "react";

export default function Img(props){
   return( 
   <div>
        <img 
            src={`./images/${props.img}.svg`}
        ></img>
    </div>)
}