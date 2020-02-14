import React, { useReducer } from 'react';
import axios from 'axios';
import HouseContext from './houseContext';
import HouseReducer from './houseReducer';
import {
  SEARCH_HOUSES,
  GET_HOUSE,
  SET_FILTER_NAME,
  SET_FILTERS,
  FILTER_HOUSES_NAME,
  FILTER_HOUSES_ATTRIBUTES,
  SET_ORDER,
  ORDER_HOUSES,
  SET_LOADING
} from '../types';

const HouseState = props => {
  const initialState = {
    houses: [],
    guildhalls: [],
    filtered: [],
    house: {},
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

    for (const city of state.cities) {
      res = await axios.get(
        `https://api.tibiadata.com/v2/houses/${world}/${city}.json`
      );

      resHouses.push(res.data.houses);
    }

    for (const city of state.cities) {
      res = await axios.get(
        `https://api.tibiadata.com/v2/houses/${world}/${city}/guildhalls.json`
      );

      resGuildhalls.push(res.data.houses);
    }

    setFilterName('');
    setFilters('minSize', '');
    setFilters('maxRent', '');
    setFilters('status', 'all');
    setFilters('type', 'houses');

    dispatch({
      type: SEARCH_HOUSES,
      payload: { resHouses, resGuildhalls, world }
    });
  };

  const getHouse = async (id, world) => {
    setLoading();

    let res = await axios.get(
      `https://api.tibiadata.com/v2/house/${world}/${id}.json`
    );

    dispatch({
      type: GET_HOUSE,
      payload: res.data.house
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
    dispatch({
      type: FILTER_HOUSES_ATTRIBUTES,
      payload: { minSize, maxRent, status, type }
    });
  };

  const setHousesOrder = order => {
    dispatch({
      type: SET_ORDER,
      payload: order
    });
  };

  const changeHousesOrder = order => {
    dispatch({
      type: ORDER_HOUSES,
      payload: order
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
        house: state.house,
        guildhalls: state.guildhalls,
        filtered: state.filtered,
        filter: state.filter,
        order: state.order,
        currentWorld: state.currentWorld,
        loading: state.loading,
        cities: state.cities,
        worlds: state.worlds,
        searchHouses,
        getHouse,
        setFilterName,
        setFilters,
        filterHousesByName,
        filterHousesByAttributes,
        setHousesOrder,
        changeHousesOrder
      }}
    >
      {props.children}
    </HouseContext.Provider>
  );
};

export default HouseState;
