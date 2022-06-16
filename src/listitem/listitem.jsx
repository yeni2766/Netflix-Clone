import { Add, PlayArrow, ThumbDownAltOutlined, ThumbUpAltOutlined } from '@mui/icons-material';
import React, { Component, useState } from 'react';
import '../list/list.css'
import './listitem.css';

import MyVideo from '../images/power.mp4';
export default function Listitem(){
    
    const [isHovered, setisHovered] = useState(false);
    const trailer = 'https://vimeo.com/468265271';
    function video(){
        window.location.href = "https://www.netflix.com/title/70298433";

    }

        return (<div className='listitem' onMouseEnter={()=>setisHovered(true)} onMouseLeave={()=>setisHovered(false)}>
         <img src = 'https://filmdaily.co/wp-content/uploads/2020/01/Power-1-main.jpg' className = 'image'/>
         
         {isHovered && (
            <>
         <video src = {MyVideo} autoPlay = {true} loop  className='video1' onClick={video}></video>
         <div className='Iteminfo'>
        
         </div>
         </>
           )}
        </div>
        
        
        
      
       
      
        )}
 
