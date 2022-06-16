import './featured.css'
import React, { Component } from 'react';
import { InfoOutlined, PlayArrow } from '@mui/icons-material';
class Featured extends Component {
    state = {  } 
    render() { 
        return (
            
    <div className='featured'>
           <div className='category'>
            <span>Movies</span>
            <select name = 'genre' id ='genre'>
            <option>Genre</option>
            <option value ='adventure'>Adventure</option>
            <option value = 'action'>Action</option>
            <option value = 'horror'>Horror</option>
            </select>

             </div>

    <div className='info'>
        

    <div className='titleoverall'>
   <h2 className='title'>MISS AMERICANA</h2>
   <span className='title1'>TAYLOR SWIFT</span>
   </div>
    <span className="desc">
        In this revealing documentary, Taylor Swift embraces her role as a songwriter and performer - and as a woman harnessing the full power of her voice.
    </span>
 
    <div className = 'button'>
        <button className="play">
            <PlayArrow/>
            <span>Play</span>
        </button>
        <button className="moreinfo">
            <InfoOutlined/>
            <span>More Info</span>
        </button>
    </div>
    </div>
    </div>
    );
    }
}
 
export default Featured;