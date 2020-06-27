import React from 'react';
import Screenview from './screenView';
import './ipod.css';
import ZingTouch from 'zingtouch';
import Controlpad from './controlpad';
import './images/setting.jpg';



class Ipod extends React.Component{

    constructor(props){
        super(props);

        this.state={
            Menu:true,
            album:false,
            songs:true,
            setting:false,
            artist:false,
            showHide:false
        }
    }

    //Tracking Controlpad rotation
    contrlPadRotate=(props)=>{
        let angle =0;
        const target =document.getElementById('outerwheel');
        const region =new ZingTouch.Region(target);
        region.bind(target, 'rotate', (e) =>{
           
            angle = angle+ e.detail.distanceFromLast;
            
            if(angle<0 && this.state.Menu===true){
                //Songs
                
                let songs =document.getElementById('songs');
                songs.style.backgroundColor="black";
                songs.style.color="white";


                let Album =document.getElementById('Album');
                Album.style.backgroundColor="white";
                Album.style.color="black";


                let Artist =document.getElementById('Artist');
                Artist.style.color="black";
                Artist.style.backgroundColor="white";

                let Settings =document.getElementById('Settings');
                Settings.style.backgroundColor="white";
                Settings.style.color="black";

                //trace the wheel
                this.setState({
                    Menu:true,
                    album:false,
                    songs:true,
                    artist:false,
                    setting:false
                })
               // console.log(this.state.songs);
            }

            

            if(angle<15 && angle>0 && this.state.Menu===true){
                //Album
                    let Album =document.getElementById('Album');
                    Album.style.backgroundColor="black";
                    Album.style.color="white";

                    let songs =document.getElementById('songs');
                    songs.style.backgroundColor="white";
                    songs.style.color="black";

                    let Settings =document.getElementById('Settings');
                    Settings.style.backgroundColor="white";
                    Settings.style.color="black";

                    let Artist =document.getElementById('Artist');
                    Artist.style.color="black";
                    Artist.style.backgroundColor="white";

                    this.setState({
                        Menu:true,
                        album:true,
                        songs:false,
                        artist:false,
                        setting:false
                    })

                   // console.log(this.state.album);
                }

            if(angle<30 && angle>15 && this.state.Menu===true){
                //Artist
                let Artist =document.getElementById('Artist');
                Artist.style.backgroundColor="black";
                Artist.style.color="white";

                    let songs =document.getElementById('songs');
                    songs.style.backgroundColor="white";
                    songs.style.color="black";

                    let Settings =document.getElementById('Settings');
                    Settings.style.backgroundColor="white";
                    Settings.style.color="black";
                    
                    let Album =document.getElementById('Album');
                    Album.style.backgroundColor="white";
                    Album.style.color="black";
                    this.setState({
                        Menu:true,
                        album:false,
                        songs:false,
                        artist:true,
                        setting:false
                    })
    
                  //  console.log(this.state.artist);

            }

            if(angle<45 && angle>30 && this.state.Menu===true){
                //setting

                let Album =document.getElementById('Album');
                Album.style.backgroundColor="white";
                Album.style.color="black";

                let songs =document.getElementById('songs');
                songs.style.backgroundColor="white";
                songs.style.color="black";

                let Settings =document.getElementById('Settings');
                Settings.style.backgroundColor="black";
                Settings.style.color="white";

                let Artist =document.getElementById('Artist');
                Artist.style.backgroundColor="white";
                Artist.style.color="black";
                

                this.setState({
                    Menu:true,
                    album:false,
                    songs:false,
                    artist:false,
                    setting:true
                })

               // console.log(this.state.setting);
            }
            

        });

    }


    enterItem= (props)=>{
        //click on menu item
 
         if(this.state.songs===true && this.state.Menu===true ){
            this.setState({Menu:false},()=>{
                console.log(this.state.Menu);
            })
 
             // console.log(this.state.Menu);
            let screen =document.getElementById('mainScreen');
            let list=document.getElementById('list');
            list.style.visibility="hidden";
            list.style.display="none";
 
            let h1 =document.createElement('img');
            h1.id="h1-screen";
            //h1.textContent="Songs";
             h1.setAttribute("src",require('./images/player.jpg'));
            h1.style.height="100%";
            h1.style.width="100%";
 
            screen.appendChild(h1);
         }

         if(this.state.album===true && this.state.Menu===true){
             
            this.setState({Menu:false},()=>{
                console.log(this.state.Menu);
            })
            
            let screen =document.getElementById('mainScreen');
           let list=document.getElementById('list');
            list.style.visibility="hidden";
            list.style.display="none";

           let h1 =document.createElement('img');
           h1.id="h1-screen";   
           h1.setAttribute("src",require('./images/album.jpg'));
           h1.style.height="100%";
           h1.style.width="100%";
           screen.appendChild(h1);
        }
 
 
         if(this.state.artist===true && this.state.Menu===true){
             
             this.setState({Menu:false},()=>{
                 console.log(this.state.Menu);
             })
             
             let screen =document.getElementById('mainScreen');
            let list=document.getElementById('list');
             list.style.visibility="hidden";
             list.style.display="none";
 
            let h1 =document.createElement('img');
            h1.id="h1-screen";
            //h1.textContent="Artist";
            h1.setAttribute("src",require('./images/artist.jpg'));
            h1.style.height="100%";
            h1.style.width="100%";
            h1.style.margin="auto";
            screen.appendChild(h1);
         }
         
         
 
         
         if(this.state.setting===true && this.state.Menu===true){
             
             this.setState({Menu:false},()=>{
                 console.log(this.state.Menu);
             })
             
 
             let screen =document.getElementById('mainScreen');
             let list=document.getElementById('list');
             list.style.visibility="hidden";
             list.style.display="none";
 
            let h1 =document.createElement('img');
            h1.id="h1-screen";
            //h1.textContent="setting";
            
            h1.setAttribute("src",require('./images/setting.jpg'));
            h1.style.height="100%";
            h1.style.width="100%";
            screen.appendChild(h1);
 
         }
     }

     setImage=(props)=>{

        console.log("Inside Set Image ");
    }

    // getting black to menu using menu-button
    itemClick=(props)=>{
        console.log(this.state.Menu);

       if(this.state.Menu===false){

                //console.log(this.state.Menu);

            let prev =document.getElementById('h1-screen');
                //console.log(prev);
            prev.remove();
            let MenuItems =document.getElementById('list');
            MenuItems.style.display="block"
            MenuItems.style.visibility="visible";

            //reset the state to initial state
            this.setState({
            Menu:true,
            album:false,
            songs:true,
            artist:false,
            setting:false
           })
       }
    }
      
    

    render() {
        return (
            <div className="main">
                <Screenview className="ipodScreen" />
                <Controlpad rotate ={this.contrlPadRotate} screen={this.itemClick} innerBtn={this.enterItem}/>             
            </div>
        );
    }
}

export default Ipod;