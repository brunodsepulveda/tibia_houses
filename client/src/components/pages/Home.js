import React, { Fragment } from 'react';
import Search from '../houses/Search';
import HouseFilterByName from '../houses/HouseFilterByName';
import Houses from '../houses/Houses';

const Home = () => {
  return (
    <Fragment>
      <div className='row'>
        <div className='col-xl-2 col-lg-4'>
          <Search />
          <hr />
          <HouseFilterByName />
        </div>
        <div className='col-xl-10 col-lg-8'>
          <Houses />
        </div>
      </div>
    </Fragment>
  );
};

export default Home;
