import React, { useState, useEffect } from "react";
import { Stage, Layer } from "react-konva";
import { connect } from "react-redux";
import styled from 'styled-components'

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
  const stageStyle = {
    "border-style": "solid",
    width: width,
    height: height,
    margin: "0 auto"
  };
  
  const CanvasStyle = styled.div`
    text-align: center
    border-style: solid
    height: ${height}
    width: ${width}
    margin: 0 auto
  `;
  return (
    <CenterContent>
      <Nav />
      <ShapeMenu onClick={handleMenuClick} />
      <DownloadButton stageNode={stageNode} />
      <CanvasStyle>
        <Stage
          width={400}
          height={400}
          onClick={setCurrentShape}
          ref={setStageNode}
          style={stageStyle}
        >
          <Layer>
            {cardItems && cardItems.length > 0 && cardItems.map(componentMapper)}
            <TransformerComponent selectedShapeName={currentShape} />
          </Layer>
        </Stage>
      </CanvasStyle>
    </CenterContent>
  );
};

export default Canvas;
