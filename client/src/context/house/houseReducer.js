import { SEARCH_HOUSES, FILTER_CONTACTS_NAME, SET_LOADING } from '../types';

export default (state, action) => {
  switch (action.type) {
    case SEARCH_HOUSES:
      return {
        ...state,
        houses: action.payload.resHouses,
        currentWorld: action.payload.world,
        loading: false
      };
    case FILTER_CONTACTS_NAME:
      return {
        ...state,
        filteredHouses: state.houses.map(housePerCity => {
          return housePerCity.houses.filter(house => {
            const regex = new RegExp(`${action.payload}`, 'gi');
            return house.name.match(regex);
          });
        })
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
