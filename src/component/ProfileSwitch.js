import React from 'react'
import "./ProfileSwitch.css"

export default function ProfileSwitch(props) {
    return (
        <div>
            <div className="mainProfileSwitch">
                <div className="profileProfileSwitch">
                    <img src={props.profile} alt="" />
                    <div>
                        <h1 className="userDetail">{props.userName}</h1>
                        <p1 className="name">{ props.name}</p1>
                    </div>
                    
                    
                </div>

                <div className="switch">
                        <a href="#">Switch</a>
                </div>

                
            </div>
        
            <div className="seeAll">
                <p1>Suggestion For You</p1>
                <a href="#">see All</a>
            </div>
        </div>
    )
}
