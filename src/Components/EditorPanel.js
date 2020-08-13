import React from "react";
import { connect } from "react-redux";

import "../index.css";
import { deleteShape } from '../redux/actions';
import { renderAnimatedButton } from "../utils";

const EditorPanel = ({ cardItemsState, handleEditorPanelUpdate, deleteShape }) => {
  const { cardItems, id, currentShape } = cardItemsState;
  const currentData = cardItems && cardItems.find((item) => item.id == id);
  const createEditorPanel = () =>
    Object.keys(currentData.shapeAttributes).map((shapeKey) => (
      <div className="field">
        <label>{shapeKey}</label>
        <input
          key={shapeKey}
          value={currentData.shapeAttributes[shapeKey]}
          id={shapeKey}
          onChange={(e) => {
            currentData.shapeAttributes[shapeKey] = e.target.value;
            handleEditorPanelUpdate(id, currentData)
          }}
        />
      </div>
    ));

  if (!currentData || !currentShape) {
    return (
      <form class="ui form editor">
        <h2 className="ui header">Editor Panel</h2>
        {["posX", "posY", "width", "height"].map((fieldName) => (
          <div className="field">
            <label>{fieldName}</label>
            <input key={fieldName} type="number" disabled />
          </div>
        ))}
      </form>
    );
  }

  const onClick = e => {
    deleteShape(parseInt(id))
  }
  return (
    <form class="ui form editor">
      <h2 className="ui header">Editor Panel</h2>
      {createEditorPanel()}
      <div id={id} class="ui vertical animated button" tabindex="0" onClick={onClick}>
        <div class="hidden content">Delete Shape</div>
        <div class="visible content">
          <i class="trash icon"></i>
        </div>
      </div>
    </form>
  );
};

const mapStateToProps = (state) => ({
  cardItemsState: state.cardItems,
});

export default connect(mapStateToProps, { deleteShape })(EditorPanel);
