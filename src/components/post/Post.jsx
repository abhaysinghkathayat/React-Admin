import React, { useState } from "react";
import './post.css';
import MoreVertOutlinedIcon from '@mui/icons-material/MoreVertOutlined';
import { Users } from "../../dummyData";

const Post = ({ post }) => {
    // const user = Users.filter(u=>u.id===1);
    // console.log(user);
    const [like, setLike] = useState(post.like)
    const [islike, setislike] = useState(false)

    const likeHandler = () => {
        setLike(islike ? like - 1 : like + 1);
        setislike(!islike)
    }
    return (
        <div className="post">
            <div className="postWrapper">
                <div className="postTop">
                    <div className="postTopLeft">
                        <img className="postProfileImage"
                            src={Users.filter((u) => u.id === post?.id)[0].profilePicture} alt="" />
                        <span className="postUserName">
                            {Users.filter((u) => u.id === post?.id)[0].Username}
                        </span>
                        <span className="postDate">{post.date}</span>
                    </div>
                    <div className="postTopRight">
                        <MoreVertOutlinedIcon />
                    </div>
                </div>
                <div className="postCenter">
                    <span className="postText">{post.desc}</span>
                    <img className="postImg" src={post?.photo} alt="" />
                </div>
                <div className="postBottom">
                    <div className="postBottomLeft">
                        <img className="likeIcon" onClick={likeHandler} src="assets/download (1).svg" alt="" />
                        <img className="likeIcon" onClick={likeHandler} src="assets/download.svg" alt="" />
                        <span className="postLikeCounter">{like} people Liked It</span>
                    </div>
                    <div className="postBottomRight">
                        <span className="postCommentText">{post.comment} comments </span>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Post;