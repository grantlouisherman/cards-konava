import React, { useState, useRef } from "react";
import { Image } from "react-konva";
import useImage from 'use-image';



const CardComponentImage = () => {
  const shapeRef = useRef();
  const [ imgNode, setImgNode ] = useState('');
  console.log(imgNode)
  const [ shapeAttributes, setShapeAttributes] = useState({posX:50, posY:50, width: 50, height: 100})
  const [image] = useImage('https://konvajs.org/assets/lion.png', 'Anonymous');
  return (
    <Image
      image={image}
      x={shapeAttributes.posX}
      y={shapeAttributes.posY}
      name="img"
      draggable
      onDragEnd = { (e) => {
        const posX = e.target.x()
        const posY = e.target.y()
        const width = shapeRef && shapeRef.current && shapeRef.current.scaleX();
        const height = shapeRef && shapeRef.current && shapeRef.current.scaleY();
        setShapeAttributes({ posX, posY, width, height });
      }}
      ref={setImgNode}
    />
  )
};

export default CardComponentImage;
