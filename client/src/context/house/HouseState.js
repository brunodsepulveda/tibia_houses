import React, { useReducer } from 'react';
import axios from 'axios';
import HouseContext from './houseContext';
import HouseReducer from './houseReducer';
import { SEARCH_HOUSES, FILTER_CONTACTS_NAME, SET_LOADING } from '../types';

const HouseState = props => {
  const initialState = {
    houses: [],
    filteredHouses: null,
    currentWorld: null,
    cities: [
      "Ab'Dendriel",
      'Ankrahmun',
      'Carlin',
      'Darashia',
      'Edron',
      'Farmine',
      'Gray Beach',
      'Issavi',
      'Kazordoon',
      'Liberty Bay',
      'Port Hope',
      'Rathleton',
      'Svargrond',
      'Thais',
      'Venore',
      'Yalahar'
    ],
    worlds: ['Belobra', 'Descubra', 'Kalibra'],
    loading: false
  };

  const [state, dispatch] = useReducer(HouseReducer, initialState);

  const searchHouses = async (world, type, status) => {
    setLoading();

    let res;
    let resHouses = [];

    for (const city of initialState.cities) {
      res = await axios.get(
        `https://api.tibiadata.com/v2/houses/${world}/${city}/${type}.json`
      );

      resHouses.push(res.data.houses);
    }

    dispatch({
      type: SEARCH_HOUSES,
      payload: { resHouses, world }
    });
  };

  const filterHousesByName = name => {
    dispatch({
      type: FILTER_CONTACTS_NAME,
      payload: name
    });
  };

  const setLoading = () => {
    dispatch({
      type: SET_LOADING
    });
  };

  return (
    <HouseContext.Provider
      value={{
        houses: state.houses,
        filteredHouses: state.filteredHouses,
        currentWorld: state.currentWorld,
        loading: state.loading,
        cities: state.cities,
        worlds: state.worlds,
        searchHouses,
        filterHousesByName
      }}
    >
      {props.children}
    </HouseContext.Provider>
  );
};

export default HouseState;
