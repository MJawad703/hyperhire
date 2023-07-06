import React from "react";
import photo from "../../assets/photo.svg";
import "./Footer.css";
import Typography from "../Typography/Typography";

const Footer = ({ text, helperText }) => {
  return (
    <div className="com_footer_container">
      <img src={photo} alt="photo" />
      <Typography text={text} variant="normal" />
      <Typography text={helperText} variant="normal" />
    </div>
  );
};

export default Footer;
