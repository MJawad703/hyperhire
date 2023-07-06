import React from "react";
import "./PostImage.css";

const PostImage = ({ postImage }) => {
  return (
    <div
      className="com_post_image_container"
      style={{
        backgroundImage: `url(https://wjddnjs754.cafe24.com/web/product/small/202303/5b9279582db2a92beb8db29fa1512ee9.jpg)`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    ></div>
  );
};

export default PostImage;
