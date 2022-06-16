import { Add, PlayArrow, ThumbDownAltOutlined, ThumbUpAltOutlined } from '@mui/icons-material';
import React, { Component, useState } from 'react';
import '../list/list1.css'
import './listitem.css';
import MyVideo from '../images/power.mp4';
import video from '../images/defenders.mp4'
export default function Listitem1(){
    
    const [isHovered, setisHovered] = useState(false);
    const trailer = 'https://vimeo.com/468265271';
    function Video(){
      window.location.href = "https://www.netflix.com/title/80002566";

  }
        return (<div className='listitem1' onMouseEnter={()=>setisHovered(true)} onMouseLeave={()=>setisHovered(false)}>
         <img src = 'https://ntvb.tmsimg.com/assets/p14004085_b_h10_aa.jpg?w=960&h=540' className = 'image'/>
         
         {isHovered && (
            <>
         <video src = {video} autoPlay = {true} loop  className='video3' onClick={Video}></video>
         <div className='Iteminfo'>
        
         </div>
         </>
           )}
        </div>
        
        
        
      
       
      
        )}
 
