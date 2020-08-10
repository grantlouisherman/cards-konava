import React from "react";
import { Stage, Layer } from "react-konva";

import TransformerComponent from "./TransformerComponent";
import ShapeMenu from "../ShapeMenu";
import DownloadButton from "../DownloadButton";
import Nav from "../Nav";
import EditorPanel from "../EditorPanel";
import "../../index.css";

const Canvas = ({
  handleMenuClick,
  stageNode,
  componentMapper,
  setCurrentShape,
  setStageNode,
  cardItems,
  currentShape,
  width,
  height,
  handleEditorPanelUpdate,
}) => {
  const SetWidthAndHeight = {
    width: width,
    height: height,
  };
  return [
    <div className="ui centered grid">
      <EditorPanel handleEditorPanelUpdate={handleEditorPanelUpdate}/>
      <div className="six wide tablet six wide computer column">
        <Nav />
        <ShapeMenu onClick={handleMenuClick} />
        <DownloadButton stageNode={stageNode} />
        <Stage
          width={width}
          height={height}
          onClick={setCurrentShape}
          ref={setStageNode}
          className="stage"
          style={SetWidthAndHeight}
        >
          <Layer>
            {cardItems &&
              cardItems.length > 0 &&
              cardItems.map(componentMapper)}
            <TransformerComponent selectedShapeName={currentShape} />
          </Layer>
        </Stage>
      </div>
    </div>,
  ];
};

export default Canvas;
