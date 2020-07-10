import React, { useState, useRef } from "react";
import { Text } from "react-konva";

const CardComponentText = ({ shapeAttributes: { posX, posY, width, height }, text, id, type}) => {
  const shapeRef = useRef();
  return (
    <Text
      id={`${id}`}
      x={width}
      y={height}
      text={text}
      name={`${type}-${id}`}
      draggable
      onDragEnd = { (e) => {
        const posX = e.target.x()
        const posY = e.target.y()
        const width = shapeRef && shapeRef.current && shapeRef.current.scaleX();
        const height = shapeRef && shapeRef.current && shapeRef.current.scaleY();
        // setShapeAttributes({ posX, posY, width, height });
      }}
      />
  )
};
export default CardComponentText;
