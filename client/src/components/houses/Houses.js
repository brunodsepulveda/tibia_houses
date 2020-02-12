import React, { useContext, Fragment } from 'react';
import HouseItem from './HouseItem';
import Spinner from '../layout/Spinner';
import HouseContext from '../../context/house/houseContext';
import NavTab from '../layout/NavTab';

const Houses = () => {
  const houseContext = useContext(HouseContext);

  const { loading, houses, cities, world } = houseContext;

  if (loading) {
    return <Spinner />;
  } else {
    if (houses.length > 0) {
      return (
        <div>
          <NavTab id={world} items={cities} />
          <div className='tab-content' id={world + 'Content'}>
            {houses.map((housePerCity, index) => {
              if (index === 0) {
                return (
                  <div
                    key={housePerCity.town}
                    className='tab-pane fade show active'
                    id={housePerCity.town
                      .toLowerCase()
                      .split(' ')
                      .join('_')
                      .split("'")
                      .join('_')}
                    role='tabpanel'
                    aria-labelledby={
                      housePerCity.town
                        .toLowerCase()
                        .split(' ')
                        .join('_')
                        .split("'")
                        .join('_') + '-tab'
                    }
                  >
                    <div className='row'>
                      {housePerCity.houses.map(houseItem => {
                        return (
                          <HouseItem
                            key={houseItem.houseid}
                            house={houseItem}
                          />
                        );
                      })}
                    </div>
                  </div>
                );
              } else {
                return (
                  <div
                    key={housePerCity.town}
                    className='tab-pane fade'
                    id={housePerCity.town
                      .toLowerCase()
                      .split(' ')
                      .join('_')
                      .split("'")
                      .join('_')}
                    role='tabpanel'
                    aria-labelledby={
                      housePerCity.town
                        .toLowerCase()
                        .split(' ')
                        .join('_')
                        .split("'")
                        .join('_') + '-tab'
                    }
                  >
                    <div className='row'>
                      {housePerCity.houses.map(houseItem => {
                        return (
                          <HouseItem
                            key={houseItem.houseid}
                            house={houseItem}
                          />
                        );
                      })}
                    </div>
                  </div>
                );
              }
            })}
          </div>
        </div>
      );
    } else {
      return <Fragment></Fragment>;
    }
  }
};

export default Houses;
