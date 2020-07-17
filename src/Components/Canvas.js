import React, { useState, useEffect } from 'react';
import { Stage, Layer } from 'react-konva';
import { connect } from "react-redux";

import { createNewCardItem, updateCardItem, currentlySelectedCardItem } from '../redux/actions';

import TransformerComponent from './TransformerComponent';
import ShapeMenu from './ShapeMenu';
import CardComponentText  from './CardComponentText';
import CardComponentImage from './CardComponentImage';
import DownloadButton from './DownloadButton';


const Canvas = (props) => {
  useEffect(() => {}, [props]);
  const [ stageNode, setStageNode ] = useState();
  const {
    createNewCardItem,
    updateCardItem,
    currentlySelectedCardItem,
    cardAttributes: { cardItems, currentShape } } = props;

  const setCurrentShape = (e) => {
    currentlySelectedCardItem(e.target.name());
  };

  const handleMenuClick = (e, type) => {
    createNewCardItem(type, {posX:50, posY:50, width: 50, height: 100})
  };

  const componentMapper = (componentProps) => {
    const { type } = componentProps;
    return type === 'text' ?
    <CardComponentText {...componentProps} updateCardItem={updateCardItem} text={"hi"} /> :
    <CardComponentImage {...componentProps} updateCardItem={updateCardItem} />;
  }

  return ([
    <ShapeMenu onClick={handleMenuClick.bind(this)} />,
    <DownloadButton stageNode={stageNode} />,
    <Stage
       width={window.innerWidth}
       height={window.innerHeight}
       onClick={setCurrentShape}
       ref={setStageNode}
       >
      <Layer>
      { cardItems.length > 0 && cardItems.map(componentMapper)}
      <TransformerComponent
            selectedShapeName={currentShape}
          />
      </Layer>
    </Stage>
  ]
 );
}

const mapStateToProps = state => ({
  cardAttributes: state.cardItems,
})
export default connect(mapStateToProps , { createNewCardItem, updateCardItem, currentlySelectedCardItem })(Canvas);
