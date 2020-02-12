import React, { useContext, Fragment } from 'react';
import HouseItem from './HouseItem';
import Spinner from '../layout/Spinner';
import HouseContext from '../../context/house/houseContext';

const Houses = () => {
  const houseContext = useContext(HouseContext);

  const { loading, houses } = houseContext;

  if (loading) {
    return <Spinner />;
  } else {
    return (
      <div>
        {houses.map(housePerCity => {
          return (
            <Fragment key={housePerCity.town}>
              <h3 className='mt-4'>{housePerCity.town}</h3>
              <div className='row'>
                {housePerCity.houses.map(houseItem => {
                  return (
                    <HouseItem key={houseItem.houseid} house={houseItem} />
                  );
                })}
              </div>
            </Fragment>
          );
        })}
      </div>
    );
  }
};

export default Houses;
