import React, { useState, useRef, useEffect } from "react";
import { Image } from "react-konva";
import useImage from 'use-image';



const CardComponentImage = ({
  shapeAttributes: { posX, posY, width, height },
  id, type,
  updateCardItem
  }) => {
  const shapeRef = useRef();
  const [ shapeAttributes, setShapeAttributes] = useState({posX:50, posY:50, width: 50, height: 100})
  const [image] = useImage('https://konvajs.org/assets/lion.png', 'Anonymous');
  const resize = e => {
     const node = shapeRef.current;
     const scaleX = node.scaleX();
     const scaleY = node.scaleY();
     updateCardItem(id, { shapeAttributes: {
       posX: node.x(),
       posY: node.y(),
       width: Math.max(5, node.width() * scaleX),
       height: Math.max(node.height() * scaleY),
        } });
      }
  return (
    <Image
      id={id}
      image={image}
      width={image && image.width}
      height={image && image.height}
      x={shapeAttributes.posX}
      y={shapeAttributes.posY}
      name={`${type}-${id}`}
      draggable
      onClick={resize}
      onDragStart={resize}
      onDragEnd={resize}
      onTransformEnd={resize}
      ref={shapeRef}
    />
  )
};

export default CardComponentImage;
