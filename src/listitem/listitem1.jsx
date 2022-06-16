import { Add, PlayArrow, ThumbDownAltOutlined, ThumbUpAltOutlined } from '@mui/icons-material';
import React, { Component, useState } from 'react';
import '../list/list1.css'
import './listitem.css';
import MyVideo from '../images/power.mp4';
export default function Listitem1(){
    
    const [isHovered, setisHovered] = useState(false);
    const trailer = 'https://vimeo.com/468265271';

        return (<div className='listitem1' onMouseEnter={()=>setisHovered(true)} onMouseLeave={()=>setisHovered(false)}>
         <img src = 'https://filmdaily.co/wp-content/uploads/2020/01/Power-1-main.jpg' className = 'image'/>
         
         {isHovered && (
            <>
         <video src = {MyVideo} autoPlay = {true} loop  className='video3'></video>
         <div className='Iteminfo'>
        
         </div>
         </>
           )}
        </div>
        
        
        
      
       
      
        )}
 
