import React from "react";
import Chip from "../Chip/Chip";
import "./Tags.css";

const Tags = ({ tags }) => {
  return (
    <div className="com_tags_container">
      {tags.map((tag) => (
        <Chip text={`#${tag.name.toUpperCase()}`} key={tag.id} />
      ))}
    </div>
  );
};

export default Tags;
