// import React from 'react'
import Suggestion from '../component/Suggestion';
import Footer from '../component/Footer';
import ProfileSwitch from '../component/ProfileSwitch';

export default function Sidebar() {
    return (
        <div>

            {/* <h1>hELOODOJFDF</h1> */}
        

            <div>
                <ProfileSwitch
                profile="./me.jpg"
                userName="Heisarki"
                name="he_is_ar_ki"/>  
            </div>
            <div>
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
            

            <div>
                <Footer/>
            </div>

        
        </div>
    )
}
