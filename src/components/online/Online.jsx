import React from "react";
import './online.css'; 

const Online = ({user }) => {
    return (
            <li className="rightBarfriend">
                <div className="rightbarimageContainer">
                <img src={user.profilePicture} className="rightBarprofileimage" alt="" />
                    <span className="rightbaronline"></span>
                </div>
            <span className="rightBarUsername">{user.Username}</span>
            </li>
    )
}

export default Online;