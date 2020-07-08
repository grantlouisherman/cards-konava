import { CREATE_NEW_ITEM, UPDATE_ITEM, CURRENTLY_SELECTED_ITEM } from './actionTypes';

export const createNewCardItem = (type, shapeAttributes) => ({
  type: CREATE_NEW_ITEM,
  payload: {
    type,
    shapeAttributes
  }
});

export const updateCardItem = () => ({
  type: UPDATE_ITEM,
  payload: {

  }
})

export const currentlySelectedCardItem = () => ({
  type: CURRENTLY_SELECTED_ITEM,
  payload: {

  }
})
