import { CREATE_NEW_ITEM, UPDATE_ITEM, CURRENTLY_SELECTED_ITEM } from '../actionTypes';

const initialState = { cardItems: [] };

export default (state=initialState, action) => {
  switch(action.type){
    case CREATE_NEW_ITEM:
      state.cardItems.push({ id: state.cardItems.length, ...action.payload });
      return Object.assign({}, state);
    case UPDATE_ITEM:
      const { id, shapeAttributes } = action.payload;
      const targetUpdatedItem = state.cardItems[id];
      state.cardItems[id] = { ...targetUpdatedItem, ...shapeAttributes}
      return Object.assign({}, state);;
    case CURRENTLY_SELECTED_ITEM:
    return Object.assign({}, state, {...action.payload});
    default:
    return state;
  }
}
