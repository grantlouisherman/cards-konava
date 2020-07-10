import React, { useState, useRef } from "react";
import { Text } from "react-konva";

const CardComponentText = ({
  shapeAttributes: { posX, posY, width, height },
  text, id, type,
  updateCardItem
  }) => {
  const shapeRef = useRef();
  return (
    <Text
      id={`${id}`}
      x={posX}
      y={posY}
      text={text}
      name={`${type}-${id}`}
      draggable
      onDragEnd = { (e) => {
        const posX = e.target.x()
        const posY = e.target.y()
        const width = e.target.width();
        const height = e.target.height();
        console.log(width, height)
        updateCardItem(id, { shapeAttributes: {posX, posY, width, height } });
      }}
      />
  )
};
export default CardComponentText;
