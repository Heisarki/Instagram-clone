import React from 'react';
import "./Header.css";

function Header() {
    return (
        <div className="headerMain">
            <div>
                <img src="./logo/insta.png" alt=""/>
            </div>

            <div>
                <input type="text" placeholder="Search"></input>
            </div>
            
            <div className="headerNav">
                <img src="./logo/insta_home.png" alt="" />
                <img src="./logo/insta_message.png" alt="" />
                <img src="./logo/insta_explore.png" alt="" />
                <img src="./logo/insta_notification.png" alt=""/>
            </div>
        </div>
    )
}

export default Header;