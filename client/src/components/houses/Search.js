import React, { useState, useContext } from 'react';
import HouseContext from '../../context/house/houseContext';

const Search = () => {
  const [world, setWorld] = useState('choose world');

  const houseContext = useContext(HouseContext);

  const { searchHouses, worlds } = houseContext;

  const onSubmit = e => {
    e.preventDefault();

    if (world !== 'choose world') {
      searchHouses(world);
    }
  };

  const onChange = e => {
    setWorld(e.target.value);
  };

  return (
    <div>
      <form onSubmit={onSubmit}>
        <div className='form-group'>
          <label htmlFor='selectWorld'>World</label>
          <select
            value={world}
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
          <button type='submit' className='btn btn-primary btn-lg btn-block'>
            Search
          </button>
        </div>
      </form>
    </div>
  );
};

export default Search;
