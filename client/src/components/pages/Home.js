import React, { Fragment, useContext } from 'react';
import Search from '../houses/Search';
import HouseFilterByName from '../houses/HouseFilterByName';
import HouseFilterByAttribute from '../houses/HouseFilterByAttribute';
import Houses from '../houses/Houses';
import HouseContext from '../../context/house/houseContext';

const Home = () => {
  const houseContext = useContext(HouseContext);

  const { houses } = houseContext;

  return (
    <Fragment>
      <div className='row'>
        <div className='col-xl-2 col-lg-4'>
          <Search />
          {houses.length > 0 && (
            <Fragment>
              <hr />
              <HouseFilterByName />
              <hr />
              <HouseFilterByAttribute />
            </Fragment>
          )}
        </div>
        <div className='col-xl-10 col-lg-8'>
          <Houses />
        </div>
      </div>
    </Fragment>
  );
};

export default Home;
