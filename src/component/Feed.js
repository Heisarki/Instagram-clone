import React from 'react'
import "./Feed.css";

export default function Feed(props) {
    return (
        <div className="mainFeed">

        {/* header */}

            <div className="header  padd">
                <div className="profile">
                    <img src={props.image} alt="" />
                    <p1>{props.name}</p1>
                </div>
                <div className="option">
                    <a href="#">...</a>
                    
                </div>
            </div>
        {/* Image Post */}
            <div className="photo ">
                <img src={props.photo} alt=""/>
            </div>

        {/* Reaction */}
            <div className="reaction  padd">
                <div className="react">
                    <img src="./logo/insta_notification.png" alt="" />
                    <img src="./logo/insta_comment.png" alt="" />
                    <img src="./logo/insta_message.png" alt=""/>
                </div>
                <div className="tag">
                     <img src="./logo/insta_share.png" alt=""/>
                </div>
            </div>
        
        {/* Number of people likes */}
            <div className="likes padd">
                <div>
                    <p1>heisar and 53 others likes your photo</p1>
                </div>
                <div>
                    <p2>View all 8 comments</p2>
                </div>
            </div>
                
            
            {/* comments box */}
            <div className="comments padd">
            
                    <img src={props.image} alt=""/>
                
                <input type="text" placeholder="Add a comment..."/> 
                    
                
            </div>
                
            
            

        </div>


    )
}
