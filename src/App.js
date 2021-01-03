// import logo from './logo.svg';
import './App.css';
import Header from "./component/Header"
import Feed from "./component/Feed";
import Suggestion from "./component/Suggestion"
import Footer from "./component/Footer"
import ProfileSwitch from "./component/ProfileSwitch"

function App() {
  return (

    <div>
      <div>
        <Header/>
      </div>
      
    
    <div className="app">  
      <div className="feed">
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

      



      <div className="sideWindow">
        <div>
            <ProfileSwitch
            profile="./me.jpg"
            userName="Heisarki"
            name="he_is_ar_ki"/>  
        </div>
        <div className="suggestion">
          <Suggestion
            profile="./me.jpg"
            userName="Heisarki"
            name="he_is_ar_ki"
          />
          <Suggestion
            profile="https://www.teslarati.com/wp-content/uploads/2018/10/Elon-Musk-1.jpg"
            userName="Elon Musk"
            name="@musk"
          />
          <Suggestion
            profile="./me.jpg"
            userName="Heisarki"
            name="he_is_ar_ki"
          />
          <Suggestion
            profile="https://www.thefamouspeople.com/profiles/images/justin-bieber-6.jpg"
            userName="Justin Bieber"
            name="@beleiver"
          />
          <Suggestion
            profile="https://static.billboard.com/files/media/martin-garrix-ema-2016-billboard-1548-1024x677.jpg"
            userName="Martin Garrix"
            name="martinG"
          />

          
          </div>
          {/* footer */}

          <div>
            <Footer/>
          </div>

      </div>


      </div>
      </div>
  );
}

export default App;
