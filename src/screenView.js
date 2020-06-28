import React from 'react';
import './screenView.css';
import './controlpad.css';

const Screenview= (props)=>{

     return (         
            <div className="screen"  id="mainScreen" >
                {/* <span className="heading">Ipod.js</span> */}
               <ul id="list">
                   <li id="songs" className="selected" >Songs</li>
                   <li id="Album" >Album</li>
                   <li id="Artist">Artist</li>
                   <li id="Settings">Setting</li>
               </ul>
               
            </div>  
        );
    }

export  default Screenview;