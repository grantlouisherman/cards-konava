import React, { useEffect } from 'react';
import { connect } from "react-redux";

const EditorPanel = ({ cardItemsState }) => {
  const { cardItems, id, currentShape } = cardItemsState;
  useEffect(() => {}, [currentShape])
  const currentData = cardItems.find(item => item.id == id)
  const createEditorPanel = () => (
    Object.keys(currentData.shapeAttributes).map(shapeKey => (
        <div>
          <h4>{shapeKey}</h4>
          <input key={shapeKey} value={currentData.shapeAttributes[shapeKey]} />
        </div>
      ))
  );

  if(!currentData){
    return null;
  }
  return (
    <div>
    { createEditorPanel() }
    </div>
  )
}

const mapStateToProps = state => ({
  cardItemsState: state.cardItems
})

export default connect(mapStateToProps, null)(EditorPanel);
