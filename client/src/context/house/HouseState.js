import React, { useReducer } from 'react';
import axios from 'axios';
import HouseContext from './houseContext';
import HouseReducer from './houseReducer';
import {
  SEARCH_HOUSES,
  SET_FILTER_NAME,
  SET_FILTERS,
  FILTER_HOUSES_NAME,
  FILTER_HOUSES_ATTRIBUTES,
  SET_LOADING
} from '../types';

const HouseState = props => {
  const initialState = {
    houses: [],
    guildhalls: [],
    filtered: [],
    filter: {
      name: '',
      minSize: '',
      maxRent: '',
      status: 'all',
      type: 'houses'
    },
    order: 'name',
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

  // Get houses and guildhalls from Tibia API
  const searchHouses = async world => {
    setLoading();

    let res;
    let resHouses = [];
    let resGuildhalls = [];

    for (const city of initialState.cities) {
      res = await axios.get(
        `https://api.tibiadata.com/v2/houses/${world}/${city}.json`
      );

      resHouses.push(res.data.houses);
    }

    for (const city of initialState.cities) {
      res = await axios.get(
        `https://api.tibiadata.com/v2/houses/${world}/${city}/guildhalls.json`
      );

      resGuildhalls.push(res.data.houses);
    }

    dispatch({
      type: SEARCH_HOUSES,
      payload: { resHouses, resGuildhalls, world }
    });
  };

  // Set name filter state
  const setFilterName = name => {
    dispatch({
      type: SET_FILTER_NAME,
      payload: name
    });
  };

  // Set other filters state
  const setFilters = (filter, change) => {
    dispatch({
      type: SET_FILTERS,
      payload: { filter, change }
    });
  };

  const filterHousesByName = name => {
    dispatch({
      type: FILTER_HOUSES_NAME,
      payload: name
    });
  };

  const filterHousesByAttributes = (minSize, maxRent, status, type) => {
    console.log('filtering');
    dispatch({
      type: FILTER_HOUSES_ATTRIBUTES,
      payload: { minSize, maxRent, status, type }
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
        guildhalls: state.guildhalls,
        filtered: state.filtered,
        filter: state.filter,
        order: state.order,
        currentWorld: state.currentWorld,
        loading: state.loading,
        cities: state.cities,
        worlds: state.worlds,
        searchHouses,
        setFilterName,
        setFilters,
        filterHousesByName,
        filterHousesByAttributes
      }}
    >
      {props.children}
    </HouseContext.Provider>
  );
};

export default HouseState;
