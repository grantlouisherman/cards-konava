import React, { useState, useEffect } from "react";
import { Stage, Layer } from "react-konva";
import { connect } from "react-redux";
import styled from 'styled-components'

import { CenterContent } from "../../utils";
import TransformerComponent from "./TransformerComponent";
import ShapeMenu from "../ShapeMenu";
import DownloadButton from "../DownloadButton";
import Nav from "../Nav";
import EditorPanel from "../EditorPanel";
import '../../index.css';

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
  const SetWidthAndHeight = {
    width: width,
    height: height,
  }
  return [
    <div style={CenterContent}>
      <Nav />
      <ShapeMenu onClick={handleMenuClick} />
      <DownloadButton stageNode={stageNode} />
      <div className='canvas' style={SetWidthAndHeight}>
        <Stage
          width={width}
          height={height}
          onClick={setCurrentShape}
          ref={setStageNode}
          className='stage'
          style={SetWidthAndHeight}
        >
          <Layer>
            {cardItems && cardItems.length > 0 && cardItems.map(componentMapper)}
            <TransformerComponent selectedShapeName={currentShape} />
          </Layer>
        </Stage>
      </div>
    </div>,
    <EditorPanel />
  ]


};

export default Canvas;
