import React, { useState, useEffect } from 'react';
import { Stage, Layer } from 'react-konva';
import { connect } from "react-redux";

import { createNewCardItem, updateCardItem } from '../redux/actions';

import TransformerComponent from './TransformerComponent';
import ShapeMenu from './ShapeMenu';
import CardComponentText  from './CardComponentText';
import CardComponentImage from './CardComponentImage';


const Canvas = (props) => {
  useEffect(() => {}, [props]);

  const { createNewCardItem, updateCardItem, cardAttributes: { cardItems } } = props;
  const [ selectedShape, setSelectedShape ] = useState("");

  const setCurrentShape = (e) => {
    setSelectedShape(e.target.name());
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
    <Stage
       width={window.innerWidth}
       height={window.innerHeight}
       onClick={setCurrentShape}
       >
      <Layer>
      { cardItems.length > 0 && cardItems.map(componentMapper)}
      <TransformerComponent
            selectedShapeName={selectedShape}
          />
      </Layer>
    </Stage>
  ]
 );
}

const mapStateToProps = state => ({
  cardAttributes: state.cardItems
})
export default connect(mapStateToProps , { createNewCardItem, updateCardItem })(Canvas);
