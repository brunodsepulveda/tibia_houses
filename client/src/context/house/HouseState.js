import React, { useReducer } from 'react';
import axios from 'axios';
import HouseContext from './houseContext';
import HouseReducer from './houseReducer';
import { SEARCH_HOUSES, SET_LOADING } from '../types';

const HouseState = props => {
  const initialState = {
    houses: [],
    loading: false
  };

  const [state, dispatch] = useReducer(HouseReducer, initialState);

  const searchHouses = async (world, city, type, status) => {
    if (city === 'all') {
      setLoading();
    } else {
      setLoading();

      let resHouses = [];

      let res = await axios.get(
        `https://api.tibiadata.com/v2/houses/${world}/${city}/${type}.json`
      );

      resHouses.push(res.data.houses);

      dispatch({
        type: SEARCH_HOUSES,
        payload: resHouses
      });
    }
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
        loading: state.loading,
        searchHouses
      }}
    >
      {props.children}
    </HouseContext.Provider>
  );
};

export default HouseState;
