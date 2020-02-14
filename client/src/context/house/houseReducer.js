import {
  SEARCH_HOUSES,
  SET_FILTER_NAME,
  SET_FILTERS,
  FILTER_HOUSES_NAME,
  FILTER_HOUSES_ATTRIBUTES,
  SET_ORDER,
  ORDER_HOUSES,
  SET_LOADING
} from '../types';

export default (state, action) => {
  let building;
  let filtered;

  switch (action.type) {
    case SEARCH_HOUSES:
      return {
        ...state,
        houses: action.payload.resHouses,
        guildhalls: action.payload.resGuildhalls,
        filtered: action.payload.resHouses.map(housePerCity => {
          return housePerCity.houses.filter(house => {
            const regex = new RegExp('', 'gi');
            return house.name.match(regex);
          });
        }),
        currentWorld: action.payload.world,
        loading: false
      };
    case SET_FILTER_NAME:
      return {
        ...state,
        filter: {
          ...state.filter,
          name: action.payload
        }
      };
    case SET_FILTERS:
      return {
        ...state,
        filter: {
          ...state.filter,
          [action.payload.filter]: action.payload.change
        }
      };
    case FILTER_HOUSES_NAME:
      state.filter.type === 'houses'
        ? (building = state.houses)
        : (building = state.guildhalls);

      filtered = building.map(housePerCity => {
        return housePerCity.houses.filter(house => {
          const regex = new RegExp(`${action.payload}`, 'gi');
          return house.name.match(regex);
        });
      });

      if (state.filter.minSize !== '') {
        filtered = filtered.map(housePerCity => {
          return housePerCity.filter(house => {
            return house.size >= parseInt(state.filter.minSize);
          });
        });
      }

      if (state.filter.maxRent !== '') {
        filtered = filtered.map(housePerCity => {
          return housePerCity.filter(house => {
            return house.rent <= parseInt(state.filter.maxRent);
          });
        });
      }

      if (state.filter.status === 'rented') {
        filtered = filtered.map(housePerCity => {
          return housePerCity.filter(house => {
            return house.status === 'rented';
          });
        });
      } else if (state.filter.status === 'auctioned') {
        filtered = filtered.map(housePerCity => {
          return housePerCity.filter(house => {
            return house.status !== 'rented';
          });
        });
      }

      filtered = filtered.map(housePerCity => {
        return housePerCity.sort((houseA, houseB) => {
          if (state.order === 'name') {
            return houseA.name > houseB.name
              ? 1
              : houseB.name > houseA.name
              ? -1
              : 0;
          } else if (state.order === 'size') {
            return houseA.size > houseB.size
              ? 1
              : houseB.size > houseA.size
              ? -1
              : 0;
          } else if (state.order === 'rent') {
            return houseA.rent > houseB.rent
              ? 1
              : houseB.rent > houseA.rent
              ? -1
              : 0;
          } else {
            return houseA.status > houseB.status
              ? 1
              : houseB.status > houseA.status
              ? -1
              : 0;
          }
        });
      });

      return {
        ...state,
        filtered
      };
    case FILTER_HOUSES_ATTRIBUTES:
      state.filter.type === 'houses'
        ? (building = state.houses)
        : (building = state.guildhalls);

      filtered = building.map(housePerCity => {
        return housePerCity.houses.filter(house => {
          const regex = new RegExp(`${state.filter.name}`, 'gi');
          return house.name.match(regex);
        });
      });

      if (action.payload.minSize !== '') {
        filtered = filtered.map(housePerCity => {
          return housePerCity.filter(house => {
            return house.size >= parseInt(action.payload.minSize);
          });
        });
      }

      if (action.payload.maxRent !== '') {
        filtered = filtered.map(housePerCity => {
          return housePerCity.filter(house => {
            return house.rent <= parseInt(action.payload.maxRent);
          });
        });
      }

      if (action.payload.status === 'rented') {
        filtered = filtered.map(housePerCity => {
          return housePerCity.filter(house => {
            return house.status === 'rented';
          });
        });
      } else if (action.payload.status === 'auctioned') {
        filtered = filtered.map(housePerCity => {
          return housePerCity.filter(house => {
            return house.status !== 'rented';
          });
        });
      }

      filtered = filtered.map(housePerCity => {
        return housePerCity.sort((houseA, houseB) => {
          if (state.order === 'name') {
            return houseA.name > houseB.name
              ? 1
              : houseB.name > houseA.name
              ? -1
              : 0;
          } else if (state.order === 'size') {
            return houseA.size > houseB.size
              ? 1
              : houseB.size > houseA.size
              ? -1
              : 0;
          } else if (state.order === 'rent') {
            return houseA.rent > houseB.rent
              ? 1
              : houseB.rent > houseA.rent
              ? -1
              : 0;
          } else {
            return houseA.status > houseB.status
              ? 1
              : houseB.status > houseA.status
              ? -1
              : 0;
          }
        });
      });

      return {
        ...state,
        filtered
      };
    case SET_ORDER:
      return {
        ...state,
        order: action.payload
      };
    case ORDER_HOUSES:
      filtered = state.filtered.map(housePerCity => {
        return housePerCity.sort((houseA, houseB) => {
          if (action.payload === 'name') {
            return houseA.name > houseB.name
              ? 1
              : houseB.name > houseA.name
              ? -1
              : 0;
          } else if (action.payload === 'size') {
            return houseA.size > houseB.size
              ? 1
              : houseB.size > houseA.size
              ? -1
              : 0;
          } else if (action.payload === 'rent') {
            return houseA.rent > houseB.rent
              ? 1
              : houseB.rent > houseA.rent
              ? -1
              : 0;
          } else {
            return houseA.status > houseB.status
              ? 1
              : houseB.status > houseA.status
              ? -1
              : 0;
          }
        });
      });

      return {
        ...state,
        filtered
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
