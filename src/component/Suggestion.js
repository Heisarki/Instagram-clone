import React from 'react'
import "./Suggestion.css";

export default function Suggestion(props) {
    return (
        <div className="mainSuggestion">
 

            <div className="profileSuggestion">
                <div className="userDetail">
                    <img src={props.profile} alt="" />
                    <div className="name">
                        <h1>{props.userName}</h1>
                        <p1>{ props.name}</p1>
                    </div>

                    
                </div>
                
               
                
            

                <div className="follow">
                    <a href="#">Follow</a>
                </div>  
                
            </div>
            
            


            
        </div>
    )
}
