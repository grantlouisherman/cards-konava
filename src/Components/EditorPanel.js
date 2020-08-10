import React from "react";
import { connect } from "react-redux";
import "../index.css";

const EditorPanel = ({ cardItemsState, handleEditorPanelUpdate }) => {
  const { cardItems, id } = cardItemsState;
  const currentData = cardItems.find((item) => item.id == id);
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
  if (!currentData) {
    return (
      <form class="ui form editor">
        <h2 className="ui header">Editor Panel</h2>
        {["posX", "posY", "width", "height"].map((fieldName) => (
          <div className="field">
            <label>{fieldName}</label>
            <input key={fieldName} type="number" />
          </div>
        ))}
      </form>
    );
  }
  return (
    <form class="ui form editor">
      <h2 className="ui header">Editor Panel</h2>
      {createEditorPanel()}
    </form>
  );
};

const mapStateToProps = (state) => ({
  cardItemsState: state.cardItems,
});

export default connect(mapStateToProps, null)(EditorPanel);
