import React from "react";
import logo from '../logo192.png'

export default function Navbar(){
    return(
        <nav className='nav-items'>
         
          <img src={logo}  height="30px"/>
          <h1>ReactFacts</h1>
          
          <h4>React Course - Project 1</h4>
        </nav>
    )
    }