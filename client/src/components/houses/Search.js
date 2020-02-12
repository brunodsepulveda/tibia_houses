import React, { useState, useContext } from 'react';
import HouseContext from '../../context/house/houseContext';

const Search = () => {
  const [select, setSelect] = useState({
    world: 'choose world',
    city: 'choose city',
    type: 'house',
    status: 'all'
  });

  let worlds = ['Belobra', 'Descubra', 'Kalibra'];

  let cities = ['Darashia', 'Edron', 'Yalahar'];

  const houseContext = useContext(HouseContext);

  const { searchHouses } = houseContext;

  const onSubmit = e => {
    e.preventDefault();

    searchHouses(select.world, select.city, select.type, select.status);
  };

  const onChange = e => {
    setSelect({ ...select, [e.target.name]: e.target.value });
  };

  return (
    <div>
      <form onSubmit={onSubmit}>
        <div className='form-group'>
          <label htmlFor='selectWorld'>World</label>
          <select
            value={select.world}
            className='form-control text-primary'
            id='selectWorld'
            name='world'
            onChange={onChange}
          >
            <option value='choose world'>Choose World</option>
            {worlds.map(world => {
              return (
                <option key={world.toLowerCase()} value={world.toLowerCase()}>
                  {world}
                </option>
              );
            })}
          </select>
        </div>
        <div className='form-group'>
          <label htmlFor='selectCity'>City</label>
          <select
            value={select.city}
            className='form-control text-primary'
            id='selectCity'
            name='city'
            onChange={onChange}
          >
            <option value='choose city'>Choose City</option>
            <option value='all'>All</option>
            {cities.map(city => {
              return (
                <option key={city.toLowerCase()} value={city.toLowerCase()}>
                  {city}
                </option>
              );
            })}
          </select>
        </div>
        <div className='form-group'>
          <label htmlFor='selectType'>Type</label>
          <select
            value={select.type}
            className='form-control text-primary'
            id='selectType'
            name='type'
            onChange={onChange}
          >
            <option value='house'>House</option>
            <option value='guildhall'>Guildhall</option>
          </select>
        </div>
        <div className='form-group'>
          <label htmlFor='selectStatus'>Status</label>
          <select
            value={select.status}
            className='form-control text-primary'
            id='selectStatus'
            name='status'
            onChange={onChange}
          >
            <option value='all'>All</option>
            <option value='auctioned'>Auctioned</option>
            <option value='rented'>Rented</option>
          </select>
        </div>
        <div className='row'>
          <button
            type='submit'
            className='btn btn-primary btn-lg btn-block mx-3'
          >
            Search
          </button>
        </div>
      </form>
    </div>
  );
};

export default Search;
