import React, { useRef } from "react";
import { Text } from "react-konva";

const CardComponentText = ({
  shapeAttributes: { posX, posY, width, height },
  text, id, type,
  updateCardItem
  }) => {
  const shapeRef = useRef();
  // var one = document.querySelector( ".konvajs-content" );
  // const ITEM = one && one.getBoundingClientRect();
  const resize = e => {
    const posX = e.target.x()
    const posY = e.target.y()
    const height = shapeRef.current.textHeight;
    const width = shapeRef.current.textWidth;
    updateCardItem(id, { shapeAttributes: {text, posX, posY, width, height } });
  }
  return (
    <Text
      id={`${id}`}
      x={posX}
      y={posY}
      width={width}
      height={height}
      ref={shapeRef}
      text={text}
      name={`${type}-${id}`}
      draggable
      onClick={resize }
      onDragEnd={resize}
      />
  )
};
export default CardComponentText;
