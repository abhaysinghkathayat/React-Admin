import React from "react";
import Person2RoundedIcon from '@mui/icons-material/Person2Rounded';
import TopBar from "../../components/topbar/Topbar";
import Sidebar from "../../components/sidebar/Sidebar";
import Feed from "../../components/feed/Feed";
import RightBar from "../../components/rightbar/RightBar";
import './home.css';

const Home =() =>{
    return(
        <div>
            <TopBar />
            <div className="homeContainer">
            <Sidebar/>
            <Feed/>
            <RightBar/>
            </div> 
        </div>
    )
}

export default Home;