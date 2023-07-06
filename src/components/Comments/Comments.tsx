import React from "react";
import "./Comments.css";
import PostHeading from "../PostHeading/Postheading";
import dots from "../../assets/dots.svg";
import heart from "../../assets/heart.svg";
import message from "../../assets/message.svg";
import Typography from "../Typography/Typography";

const Comments = ({
  postTitle,
  helperText,
  comment,
  likeCounts,
  commentsCount,
  reply,
}) => {
  return (
    <>
      <div className="com_comments_container">
        <PostHeading postTitle={postTitle} helperText={helperText} />
        <img src={dots} alt="dots" />
      </div>
      <div className="com_comments">
        <Typography text={comment} variant="normal" />
        <div className="com_comments_icons_container">
          <img src={heart} alt="heart" height="25px" width="25px" />{" "}
          <span className="com_comments_icons">{likeCounts}</span>
          <img src={message} alt="message" height="25px" width="25px" />
          <span className="com_comments_icons">{commentsCount}</span>
        </div>
        <>
          <div className="com_comments_reply">
            <PostHeading postTitle={postTitle} helperText={helperText} />
            <img src={dots} alt="dots" />
          </div>
          <div className="com_comments_reply_section">
            <Typography text={reply} variant="normal" />
            <div className="com_comments_icons_container">
              <img src={heart} alt="heart" height="25px" width="25px" />{" "}
              <span className="com_comments_icons">{likeCounts}</span>
              <img src={message} alt="message" height="25px" width="25px" />
              <span className="com_comments_icons">{commentsCount}</span>
            </div>
          </div>
        </>
      </div>
    </>
  );
};

export default Comments;
