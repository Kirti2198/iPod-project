import React from 'react';
import './controlpad.css';


 const Controlpad = (props)=>{
   return (

   
        <div className="outer-area">
           
          <div className="outercontroller" id="outerwheel" onClick={props.rotate} >
            <p id="menu"><button id="menu-btn" onClick={props.screen}>MENU</button></p>
            <p id="prev">&lt;&lt;</p>
            <p id="play">▷||</p>
            <p id="next">&gt;&gt;</p>
            <div className="innercontroller" onClick={props.innerBtn}>
            </div>
          </div>
        </div>
      );
    }


export default Controlpad;