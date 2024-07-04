import React from "react";
import './profile.css';
import TopBar from "../../components/topbar/Topbar";
import Sidebar from "../../components/sidebar/Sidebar";
import Feed from "../../components/feed/Feed";
import Rightbar from "../../components/rightbar/RightBar";

const Profile = () => {
    return(
        <>
            <TopBar />
            <div className="profile">
                <Sidebar />
                <div className="profileRight">
                    <div className="profileRightTop">
                        <div className="profileCover">
                            <img className="profileCoverImg" src="assets/pexels-photo-1308881.jpeg" alt="" />
                            <img className="profileUserImg" src="assets/pexels-photo-1382734.jpeg" alt="" />
                        </div>
                        <div className="ProfileInfo">
                            <h4 className="profileInfoName">Abhay Kathayat</h4>
                            <span className="profileInfodesc">Hello Friends How Are You</span>
                        </div>
                    </div>
                    <div className="profileRightBottom">
                        <Feed />
                        <Rightbar profile />
                    </div>
                </div>
               
            </div> 
        </>
    )
}

export default Profile;