import {
  CREATE_NEW_ITEM,
  UPDATE_ITEM,
  CURRENTLY_SELECTED_ITEM,
  DELETE_SHAPE,
} from "./actionTypes";

export const createNewCardItem = (type, shapeAttributes) => ({
  type: CREATE_NEW_ITEM,
  payload: {
    type,
    shapeAttributes,
  },
});

export const updateCardItem = (id, shapeAttributes) => ({
  type: UPDATE_ITEM,
  payload: {
    id,
    shapeAttributes,
  },
});

export const currentlySelectedCardItem = (currentShape, id) => ({
  type: CURRENTLY_SELECTED_ITEM,
  payload: {
    currentShape,
    id,
  },
});

export const deleteShape = id => ({
  type: DELETE_SHAPE,
  payload: {
    id
  }
})
