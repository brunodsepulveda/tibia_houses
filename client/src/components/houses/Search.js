import React, { useState, useContext } from 'react';
import HouseContext from '../../context/house/houseContext';

const Search = () => {
  const [select, setSelect] = useState({
    world: 'choose world'
  });

  const houseContext = useContext(HouseContext);

  const { searchHouses, worlds } = houseContext;

  const onSubmit = e => {
    e.preventDefault();

    if (select.world !== 'choose world') {
      searchHouses(select.world, select.type, select.status);
    }
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
