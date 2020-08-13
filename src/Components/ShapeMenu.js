import React from "react";
import { renderAnimatedButton } from "../utils";
const ShapeMenu = ({ onClick }) => {

  return (
    <div onClick={onClick}>
      { renderAnimatedButton("text", "Text", "pencil alternate icon") }
      { renderAnimatedButton("img", "Image", "camera retro icon") }
    </div>
  );
};

export default ShapeMenu;
