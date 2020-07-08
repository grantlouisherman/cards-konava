import { CREATE_NEW_ITEM, UPDATE_ITEM, CURRENTLY_SELECTED_ITEM } from '../actionTypes';

const initialState = { cardItems: [] };

export default (state=initialState, action) => {
  switch(action.type){
    case CREATE_NEW_ITEM:
      const id = state.cardItems.length;
      state.cardItems.push({ id, ...action.payload });
      console.log(state)
      return Object.assign({}, state);
    case UPDATE_ITEM:
    return state;
    case CURRENTLY_SELECTED_ITEM:
    return state;
    default:
    return state;
  }
}
