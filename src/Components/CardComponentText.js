import React, { useState, useRef, useEffect } from "react";
import { Rect, Text, Transformer } from "react-konva";

const CardComponentText = (posX, posY, width, height, text, name) => {
  const shapeRef = useRef();
  const [ shapeAttributes, setShapeAttributes] = useState({posX:50, posY:50, width: 50, height: 100})
  return (
    <Text
      id={`${"text"}`}
      x={shapeAttributes.posX}
      y={shapeAttributes.posY}
      text={text}
      name={name}
      draggable
      onDragEnd = { (e) => {
        const posX = e.target.x()
        const posY = e.target.y()
        const width = shapeRef && shapeRef.current && shapeRef.current.scaleX();
        const height = shapeRef && shapeRef.current && shapeRef.current.scaleY();
        setShapeAttributes({ posX, posY, width, height });
      }}
      />
  )
};
export default CardComponentText;
