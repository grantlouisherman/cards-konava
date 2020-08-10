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
  const [ update, setUpdate ] = useState(false);
  useEffect(() => {}, [props.cardAttributes, update]);
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
    createNewCardItem(e.target.innerText, { posX: 50, posY: 50, width: 50, height: 100 });
  };

  const handleEditorPanelUpdate = (id, payload) => {
    updateCardItem(id, payload);
    setUpdate(!update);
  };
  const componentMapper = (componentProps) => {
    const { type, id } = componentProps;
    return type.toLowerCase() === "text" ? (
      <CardComponentText
        key={id}
        {...componentProps}
        updateCardItem={updateCardItem}
        text={componentProps.shapeAttributes.text ? componentProps.shapeAttributes.text : 'placeholder'}
      />
    ) : (
      <CardComponentImage key={id} {...componentProps} updateCardItem={updateCardItem} />
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
    handleEditorPanelUpdate: handleEditorPanelUpdate.bind(this),
    update,
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
