/* eslint-disable react/prop-types */
import "./PostHeader.css";
import Chip from "../Chip/Chip";
import Typography from "../Typography/Typography";
import CheckArrow from "../../assets/EXPERT_ICON.svg";

const PostHeader = ({
  profileImage,
  postTitle,
  postDescription,
  helperText,
  actionButtonText,
}) => {
  return (
    <div className="p_post_header">
      <div className="p_post_header_left">
        <div
          className="p_post_header_img"
          style={{ background: `url(${profileImage})` }}
        ></div>
        <div className="p_post_header_info_section">
          <div className="p_post_header_info_top">
            <Typography text={postTitle} variant="heading" />
            <img src={CheckArrow} alt="" />
            <p className="p_post_header_info_helper_text">{helperText}</p>
          </div>
          <div className="p_post_header_info_description">
            {postDescription}
          </div>
        </div>
      </div>
      <Chip
        backgroundColor="#01B99F"
        text={actionButtonText}
        fontColor="#fff"
      />
    </div>
  );
};

export default PostHeader;
