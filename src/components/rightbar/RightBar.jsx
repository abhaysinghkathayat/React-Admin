import React from "react";
import './rightbar.css';
import { Users } from "../../dummyData";
import Online from "../../components/online/Online";


export default function Rightbar() {
    const HomeRightbar = () => {
        return (
            <>
                <div className="birthDayContainer">
                    <img className="birthdayImg" src="assets/pexels-photo-1382734.jpeg" alt="" />
                    <span className="birthDaytext"><b>Pola Foster</b> and <b>3 Other friends </b>have a birthday today</span>
                </div>

                <img className="rightBarAd" src="assets/pexels-photo-1382734.jpeg" alt="" />
                <h4 className="rightbatTitle">{Users.length} Friend has been Online </h4>
                <ul className="rightbarFriendList">
                    {Users.map(u => (
                        <Online key={u.id} user={u} />
                    ))}
                </ul>

            </>
        )
    }

    const ProfileRightBar = () => {
        return (
            <>
                <h1 className="rightBarTitle">User Information </h1>
                <div className="rightBarInfo">
                    <div className="rightBarInfoItem">
                       <spsn className="rightBarInfoKey">City: </spsn>
                        <spsn className="rightBarInfoValue">New York </spsn>
                    </div>
                    <div className="rightBarInfoItem">
                        <spsn className="rightBarInfoKey">From: </spsn>
                        <spsn className="rightBarInfoValue">Marid</spsn>
                    </div>
                    <div className="rightBarInfoItem">
                        <spsn className="rightBarInfoKey">Relationship: </spsn>
                        <spsn className="rightBarInfoValue">single</spsn>
                    </div>
                </div>

                <h1 className="rightBarTitle">User Friend</h1>
                <div className="rightbarFollowings">
                    <div className="rightbarfollowing">
                        <img src="assets/pexels-photo-1308881.jpeg" className="rightbarFollowingImage" alt="" />
                        <span className="rightbarFollowingName">Abhay Singh</span>
                    </div>
                </div>
            </>
        );
    }
    return (
        <div className="rightbar">
            <div className="rightbarwrapper">
                <ProfileRightBar />
            </div>
        </div>
    )
}




