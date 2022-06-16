
import React, { Component } from 'react';
import Navbar from '../components/navbar/navbar';
import Featured from '../featured/featured';
import List1 from '../list/list1';
import Listitem1 from '../listitem/listitem1';
import './home.css'
import List from '../list/list';

class Home extends Component {
    state = {  } 
    render() { 
        return (<div className='home'>
            <Navbar/>
            <Featured/>
            <List/>
            <List1/>
            <br></br><br></br><br></br><br></br><br></br>
        </div>
        
        
        );
    }
}
 
export default Home;
