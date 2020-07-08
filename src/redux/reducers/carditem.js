import { CREATE_NEW_ITEM, UPDATE_ITEM } from '../actionTypes';

const initialState = {};

export default (state=initialState, action) => {
  switch(action.type){
    case CREATE_NEW_ITEM:
      return state
    case UPDATE_ITEM:
    return state;
    default:
    return state;
  }
}
