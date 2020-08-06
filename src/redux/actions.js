import { CREATE_NEW_ITEM, UPDATE_ITEM, CURRENTLY_SELECTED_ITEM } from './actionTypes';

export const createNewCardItem = (type, shapeAttributes) => ({
  type: CREATE_NEW_ITEM,
  payload: {
    type,
    shapeAttributes
  }
});

export const updateCardItem = (id, shapeAttributes) => ({
  type: UPDATE_ITEM,
  payload: {
    id,
    shapeAttributes
  }
})

export const currentlySelectedCardItem = (currentShape, id) => ({
  type: CURRENTLY_SELECTED_ITEM,
  payload: {
    currentShape,
    id
  }
})
