import React from "react";
import "./DisplayItem.scss";

function DisplayItem({ image, title, description }) {
  console.log(image, title, description);
  return (
    <div className="item">
      <div className="item__pin" />
      <img
        className="item__image"
        src={image}
        alt={title + " image cannot be loaded"}
      />
      <div className="item__text">
        <div className="item__text--title">{title}</div>
        <div className="item__text--description">{description}</div>
      </div>
    </div>
  );
}

export default React.memo(DisplayItem);
