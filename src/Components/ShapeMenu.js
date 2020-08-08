import React from "react";
// camera retro icon
const ShapeMenu = ({ onClick }) => {
  const renderAnimatedButton = (id, shapeType, iconType) => (
    <div id={id} class="ui vertical animated button" tabindex="0">
      <div class="hidden content">{shapeType}</div>
      <div class="visible content">
        <i class={`${iconType}`}></i>
      </div>
    </div>
  );
  return (
    <div onClick={onClick}>
      { renderAnimatedButton("text", "Text", "pencil alternate icon") }
      { renderAnimatedButton("img", "Image", "camera retro icon") }
    </div>
  );
};

export default ShapeMenu;
