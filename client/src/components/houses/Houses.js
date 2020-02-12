import React, { useContext, Fragment } from 'react';
import HouseItem from './HouseItem';
import Spinner from '../layout/Spinner';
import HouseContext from '../../context/house/houseContext';
import NavTab from '../layout/NavTab';

const Houses = () => {
  const houseContext = useContext(HouseContext);

  const { loading, houses, cities, world, filteredHouses } = houseContext;

  if (loading) {
    return <Spinner />;
  } else {
    if (houses.length > 0) {
      return (
        <div>
          <NavTab id={world} items={cities} />
          <div className='tab-content' id={world + 'Content'}>
            {houses.map((housePerCity, index) => {
              return (
                <div
                  key={housePerCity.town}
                  className={`tab-pane fade${
                    index === 0 ? ' show active' : ''
                  }`}
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
                    {filteredHouses !== null ? (
                      filteredHouses[index].length ? (
                        filteredHouses[index].map(houseItem => {
                          return (
                            <HouseItem
                              key={houseItem.houseid}
                              house={houseItem}
                            />
                          );
                        })
                      ) : (
                        <h4 className='mx-auto mt-5'>
                          Not found any house using this filter
                        </h4>
                      )
                    ) : (
                      housePerCity.houses.map(houseItem => {
                        return (
                          <HouseItem
                            key={houseItem.houseid}
                            house={houseItem}
                          />
                        );
                      })
                    )}
                  </div>
                </div>
              );
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
