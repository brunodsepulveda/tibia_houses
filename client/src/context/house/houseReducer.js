import { SEARCH_HOUSES, SET_LOADING } from '../types';

export default (state, action) => {
  switch (action.type) {
    case SEARCH_HOUSES:
      return {
        ...state,
        houses: action.payload,
        loading: false
      };
    case SET_LOADING:
      return {
        ...state,
        loading: true
      };
    default:
      return state;
  }
};
