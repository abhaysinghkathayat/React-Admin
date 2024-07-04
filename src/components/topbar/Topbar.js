import React from "react";
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import Person2OutlinedIcon from '@mui/icons-material/Person2Outlined';
import ChatBubbleOutlineOutlinedIcon from '@mui/icons-material/ChatBubbleOutlineOutlined';
import NotificationsOutlinedIcon from '@mui/icons-material/NotificationsOutlined';
import './topbar.css';

const TopBar = () =>{
    return (
        <div className="topBarContainer">
            <div className="topBarleft">
                <span className="logo">AbhaySocial</span>
            </div>
            <div className="topBarCenter">
              <div className="searchBar">
                <SearchOutlinedIcon className="serchIcon"/>
                <input className="searchInput" placeholder="Search... "/>
              </div>
            </div>
            <div className="topBarright">
                <div className="topbarLink">
                    <span className="topBarLink">HomePage</span>
                    <span className="topBarLink">TImeLine</span>
                </div>
                <div className="topbarIcon">
                    <div className="topBarIconItem">
                        <Person2OutlinedIcon/>
                        <span className="topBarbadge">1</span>
                    </div>
                    <div className="topBarIconItem">
                        <ChatBubbleOutlineOutlinedIcon />
                        <span className="topBarbadge">1</span>
                    </div>
                    <div className="topBarIconItem">
                        <NotificationsOutlinedIcon />
                        <span className="topBarbadge">1</span>
                    </div>
                </div>
                <img src="/assets/pexels-photo-1308881.jpeg" alt="Image" className="topBarImage"/>
            </div>            
        </div>
    )
}

export default TopBar;