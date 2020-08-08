import React, { useEffect, useState } from 'react';
import { connect } from "react-redux";

import {
  createNewCardItem,
  updateCardItem,
  currentlySelectedCardItem,
} from "../../redux/actions";

import { inchesToPixelConverter } from "../../utils";

import Canvas from './Canvas';
import CardComponentText from "./CanvasComponents/CardComponentText";
import CardComponentImage from "./CanvasComponents/CardComponentImage";

const DataLayer = (props) => {
  useEffect(() => {}, [props.cardAttributes]);
  const [stageNode, setStageNode] = useState();
  const {
    createNewCardItem,
    updateCardItem,
    currentlySelectedCardItem,
    cardAttributes: { cardItems, currentShape },
  } = props;

  const setCurrentShape = (e) => {
    currentlySelectedCardItem(e.target.name(), e.target.id());
  };

  const handleMenuClick = (e) => {
    console.log(e.target.id)
    createNewCardItem(e.target.id, { posX: 50, posY: 50, width: 50, height: 100 });
  };

  const componentMapper = (componentProps) => {
    const { type } = componentProps;
    return type === "text" ? (
      <CardComponentText
        {...componentProps}
        updateCardItem={updateCardItem}
        text={"hi"}
      />
    ) : (
      <CardComponentImage {...componentProps} updateCardItem={updateCardItem} />
    );
  };

  const { width, height } = inchesToPixelConverter(2, 5);

  const CanvasProps = {
    setCurrentShape: setCurrentShape.bind(this),
    handleMenuClick: handleMenuClick.bind(this),
    componentMapper: componentMapper.bind(this),
    width,
    height,
    cardItems,
    currentShape,
    setStageNode,
    stageNode,
  }
  return (
    <Canvas {...CanvasProps} />
  )

}

const mapStateToProps = (state) => ({
  cardAttributes: state.cardItems,
});

export default connect(mapStateToProps, {
  createNewCardItem,
  updateCardItem,
  currentlySelectedCardItem,
})(DataLayer);
