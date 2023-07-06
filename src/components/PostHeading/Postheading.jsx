/* eslint-disable react/prop-types */
import CheckArrow from "../../assets/EXPERT_ICON.svg";
import Typography from "../Typography/Typography";
import "./Postheading.css";

const Postheading = ({ postTitle, helperText }) => {
  return (
    <div className="com_post_header">
      <div className="com_post_heading_img"></div>
      <Typography text={postTitle} variant="heading" />
      <img src={CheckArrow} alt="" />
      <p className="com_post_headering_info_helper_text">{helperText}</p>
    </div>
  );
};

export default Postheading;
