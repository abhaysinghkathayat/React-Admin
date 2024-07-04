import React from "react";
import "./share.css";
import PermMediaOutlinedIcon from '@mui/icons-material/PermMediaOutlined';
import EventAvailableOutlinedIcon from '@mui/icons-material/EventAvailableOutlined';
import LivingOutlinedIcon from '@mui/icons-material/LivingOutlined';
import EmojiEmotionsOutlinedIcon from '@mui/icons-material/EmojiEmotionsOutlined';

const Share = () => {
    return (
        <div className="share">
            <div className="shareRapper">
                <div className="shareTop">
                    <img className="shareProfileImage" src="/assets/pexels-photo-1308881.jpeg" alt="" />
                    <input placeholder="What's In Your Mind Safak?" type="text" className="shareInput" />
                </div>
                <hr className="shareHr"/>
                <div className="shareBottom">
                    <div className="shareOptions">
                        <div className="shareOption">
                            <PermMediaOutlinedIcon htmlColor="tomato" className="shareIcon"/>
                            <span className="shareOptionText">Photo or Video</span>
                        </div>
                        <div className="shareOption">
                            <EventAvailableOutlinedIcon htmlColor="blue" className="shareIcon" />
                            <span className="shareOptionText">Tag</span>
                        </div>
                        <div className="shareOption">
                            <LivingOutlinedIcon htmlColor="green" className="shareIcon" />
                            <span className="shareOptionText">Location</span>
                        </div>
                        <div className="shareOption">
                            <EmojiEmotionsOutlinedIcon htmlColor="goldenrod" className="shareIcon" />
                            <span className="shareOptionText">Feeling</span>
                        </div>
                    </div>
                    <button className="sharebutton">Share</button>
                </div>
            </div>
        </div>
    )
}

export default Share;