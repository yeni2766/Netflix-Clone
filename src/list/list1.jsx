import { ArrowBackIosOutlined, ArrowForwardIosOutlined, DisplaySettingsTwoTone } from '@mui/icons-material';
import React, { Component, useRef, useState } from 'react';
import Listitem from '../listitem/listitem';
import Listitem1 from '../listitem/listitem1';
import Listitem2 from '../listitem/listitem2';



export default function List(){
const [slideNumber, setSlidenumber] = useState(0);
const [activated, setactivation] = useState(false);
    const listRef = useRef();
    const clickSlide = (direction) =>{
        setactivation(true);
        let distance  = listRef.current.getBoundingClientRect().x-50
        if(direction === 'left' && slideNumber > 0){
            setSlidenumber(slideNumber - 1);
            listRef.current.style.transform = `translateX(${230+distance}px)`
        }

        if(direction === 'right' && slideNumber < 5){
            setSlidenumber(slideNumber + 1);
            listRef.current.style.transform = `translateX(${-230+distance}px)`
        }
    }
        return (
            <div className='list'>
                <span className='listTitle'>Action Shows</span>
                    <div className="wrapper">
                    <ArrowBackIosOutlined className='sliderarrow left' onClick = {()=>clickSlide("left")}
                    style = {{visibility:!activated && 'hidden'}}
                    />
                    <div className="container" ref = {listRef}>
                        <div className = 'row'>
                        <Listitem/>
                        </div>
                
                        <div className = 'row1'>
                        <Listitem2/>
                        </div>
                        <div className = 'row1'>
                        <Listitem2/>
                        </div>
                        <div className = 'row1'>
                        <Listitem2/>
                        </div>
                        <div className = 'row1'>
                        <Listitem2/>
                        </div>
                        <div className = 'row1'>
                        <Listitem2/>
                        </div>
                    </div>
                    <ArrowForwardIosOutlined className='sliderarrow right'onClick = {()=>clickSlide('right')}/>
                    </div>
            </div>
        );
    
}
 
