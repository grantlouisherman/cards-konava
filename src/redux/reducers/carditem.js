import {
  CREATE_NEW_ITEM,
  UPDATE_ITEM,
  CURRENTLY_SELECTED_ITEM,
  DELETE_SHAPE,
} from "../actionTypes";

const initialState = { cardItems: [] };

export default (state = initialState, action) => {
  switch (action.type) {
    case CREATE_NEW_ITEM:
      const addNewState = state.cardItems;
      addNewState.push({ id: state.cardItems.length, ...action.payload });
      return Object.assign({}, state, addNewState);
    case UPDATE_ITEM:
      const { id, shapeAttributes } = action.payload;
      const targetUpdatedItem = state.cardItems[id];
      state.cardItems[id] = { ...targetUpdatedItem, ...shapeAttributes };
      return Object.assign({}, state);
    case CURRENTLY_SELECTED_ITEM:
      return Object.assign({}, state, { ...action.payload });
    case DELETE_SHAPE:
      const deleteNewState = state.cardItems.filter(cardItem => cardItem.id != action.payload.id);
      return Object.assign({}, state, { cardItems: deleteNewState});
    default:
      return state;
  }
};
