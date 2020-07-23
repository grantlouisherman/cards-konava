import React, { useState, useEffect } from "react";
import { Stage, Layer } from "react-konva";
import { connect } from "react-redux";



import { CenterContent } from "../../utils";

import TransformerComponent from "./TransformerComponent";
import ShapeMenu from "../ShapeMenu";
import DownloadButton from "../DownloadButton";
import Nav from "../Nav";

const Canvas = ({
  handleMenuClick,
  stageNode,
  componentMapper,
  setCurrentShape,
  setStageNode,
  cardItems,
  currentShape,
  width,
  height
}) => {
  const style = {
    "border-style": "solid",
    width: width,
    height: height,
    margin: "0 auto"
  };

  return (
    <CenterContent>
      <Nav />
      <ShapeMenu onClick={handleMenuClick} />
      <DownloadButton stageNode={stageNode} />
      <div style={style}>
        <Stage
          width={400}
          height={400}
          onClick={setCurrentShape}
          ref={setStageNode}
          style={style}
        >
          <Layer>
            {cardItems && cardItems.length > 0 && cardItems.map(componentMapper)}
            <TransformerComponent selectedShapeName={currentShape} />
          </Layer>
        </Stage>
      </div>
    </CenterContent>
  );
};

export default Canvas;
