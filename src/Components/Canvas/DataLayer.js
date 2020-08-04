import React, { useEffect, useState } from 'react';
import { connect } from "react-redux";

import {
  createNewCardItem,
  updateCardItem,
  currentlySelectedCardItem,
} from "../../redux/actions";

import { inchesToPixelConverter, CenterContent } from "../../utils";

import Canvas from './Canvas';
import CardComponentText from "../CardComponentText";
import CardComponentImage from "../CardComponentImage";

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
    currentlySelectedCardItem(e.target.name());
  };

  const handleMenuClick = (e, type) => {
    createNewCardItem(type, { posX: 50, posY: 50, width: 50, height: 100 });
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
