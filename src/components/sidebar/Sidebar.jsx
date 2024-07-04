import React from "react";
import './sidebar.css';
import RssFeedOutlinedIcon from '@mui/icons-material/RssFeedOutlined';
import ChatBubbleOutlineOutlinedIcon from '@mui/icons-material/ChatBubbleOutlineOutlined';
import OndemandVideoOutlinedIcon from '@mui/icons-material/OndemandVideoOutlined';
import GroupAddOutlinedIcon from '@mui/icons-material/GroupAddOutlined';
import BookmarksOutlinedIcon from '@mui/icons-material/BookmarksOutlined';
import HelpOutlineOutlinedIcon from '@mui/icons-material/HelpOutlineOutlined';
import WorkHistoryOutlinedIcon from '@mui/icons-material/WorkHistoryOutlined';
import EmojiEventsOutlinedIcon from '@mui/icons-material/EmojiEventsOutlined';
import SchoolOutlinedIcon from '@mui/icons-material/SchoolOutlined';
import { Users } from "../../dummyData";
import CloseFriend from "../cloesfriend/Closefriend";

const Sidebar = () =>{
    return(
        <div className="sidebar">
            <div className="sidebarWrapper">
               <ul className="sidebarList">
                 <li className="sidebarlistItem">
                    <RssFeedOutlinedIcon className="sidebarIcon"/>
                    <span className="sidebarListitemtext">Feed</span>
                 </li>
                    <li className="sidebarlistItem">
                        <ChatBubbleOutlineOutlinedIcon className="sidebarIcon" />
                        <span className="sidebarListitemtext">Chats</span>
                    </li>
                    <li className="sidebarlistItem">
                        <OndemandVideoOutlinedIcon className="sidebarIcon" />
                        <span className="sidebarListitemtext">Videos</span>
                    </li>
                    <li className="sidebarlistItem">
                        <GroupAddOutlinedIcon className="sidebarIcon" />
                        <span className="sidebarListitemtext">Groups</span>
                    </li>
                    <li className="sidebarlistItem">
                        <BookmarksOutlinedIcon className="sidebarIcon" />
                        <span className="sidebarListitemtext">BookMarks</span>
                    </li>
                    <li className="sidebarlistItem">
                        <HelpOutlineOutlinedIcon className="sidebarIcon" />
                        <span className="sidebarListitemtext">Questions</span>
                    </li>
                    <li className="sidebarlistItem">
                        <WorkHistoryOutlinedIcon className="sidebarIcon" />
                        <span className="sidebarListitemtext">Jobs</span>
                    </li>
                    <li className="sidebarlistItem">
                        <EmojiEventsOutlinedIcon className="sidebarIcon" />
                        <span className="sidebarListitemtext">Events</span>
                    </li>
                    <li className="sidebarlistItem">
                        <SchoolOutlinedIcon className="sidebarIcon" />
                        <span className="sidebarListitemtext">Cources</span>
                    </li>
               </ul>
               <button className="sidebarButton">Show More </button>
               <hr className="sidebarHr" />
               <ul className="sidebarfriendList">
                    {Users.map(u=>(
                        <CloseFriend key={u.id} user={u}/>
                    ))}
               </ul>

            </div>
        </div>
    )
}

export default Sidebar;
