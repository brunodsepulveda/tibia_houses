import React, { Fragment } from 'react';
import Search from '../houses/Search';
import Houses from '../houses/Houses';

const Home = () => {
  return (
    <Fragment>
      <Search />
      <Houses />
    </Fragment>
  );
};

export default Home;
