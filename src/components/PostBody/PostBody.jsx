/* eslint-disable react/prop-types */
import Typography from "../Typography/Typography";
import "./PostBody.css";

const PostBody = ({ title, description }) => {
  return (
    <div className="com_post_body_container">
      <Typography text={title} variant="heading" />
      <div style={{ marginTop: "12px" }} />
      <Typography text={description} variant="paragraph" />
    </div>
  );
};

export default PostBody;
