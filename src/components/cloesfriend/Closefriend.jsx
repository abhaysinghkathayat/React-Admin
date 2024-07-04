import React from "react";

const CloseFriend = ({user}) =>{
    return(
        <li className="sidebarfriend">
            <img className="sidebarfriendimage" src={user.profilePicture} alt="" />
            <span className="sidebarFriendName">{user.Username}</span>
        </li>
    )
}

export default CloseFriend;