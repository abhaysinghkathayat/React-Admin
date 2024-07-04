import React from "react";
import './feed.css';
import Share from "../share/Share";
import Post from "../post/Post";
import { PostData } from "../../dummyData";

const Feed = () => {
    return (
        <div className="feed">
            <div className="feedWrapper">
                <Share/>
               {
                    PostData.map((p)=>(
                    <Post key={p.id} post={p}/>
                    ))
                }
               
            </div>
        </div>
    )
}

export default Feed;
