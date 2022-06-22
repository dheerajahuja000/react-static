import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Navbar from './Components/Navbar';
import MainComponent from './Components/MainComponent';


function App(){
  return(
    <div>
      <Navbar/>
      <MainComponent/>
    </div>
  )
}

ReactDOM.render(<App/>, document.getElementById("root"));


