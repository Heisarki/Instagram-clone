// import logo from './logo.svg';
import './App.css';
import Nav from "./component/Nav"
import Feed from "./component/Feed";
import React, {useState, useEffect} from 'react';

// import Suggestion from './component/Suggestion';
// import Footer from './component/Footer';
// import ProfileSwitch from './component/ProfileSwitch';
import Sidebar from "./sidebar/Sidebar"
import { Component } from 'react';



function App() {
  
  const [change, setChange] = useState(true);


  let size = window.innerWidth;
  const onResize = () => {
      if (size <= 960) {
        setChange(true)
        
      }
      else {
        setChange(false)
        
      }
  }

  window.addEventListener('resize', onResize);

  useEffect(() => {
    onResize();
  }, []);
  

  return (

    <div>
      <div className='nav'>
        <Nav/>
      </div>
      
    
      <div className={change ? 'app-m': 'app-d'}>  
        <div className={size>=500 ? 'feed-m': 'feed-d'}>
          <Feed
            name="heisarki"
            image="./logo192.png"
            photo="./me.jpg"
          />
          <Feed
            name="Ram"
            image="./logo512.png"
            photo="./heisar.jpg"
          />
          <Feed
            name="heisarki"
            image="./logo192.png"
            photo="./laptop.jpg"
          />
          <Feed
            name="DaDa"
            image="./arrow.png"
            photo="./donald.jpg"
            />
            
            <div>
              <p1>Loading..........</p1>
            </div>
        </div>

        

        {/* suggestion */}



        <div className={size<=1100 ? 'sidewindow-m' : 'sidewindow-d'}>
        {size <=1100 ? null: <Sidebar/>}

        </div>
      
        
        
      
      


      </div>
    </div>
  );
}

export default App;


