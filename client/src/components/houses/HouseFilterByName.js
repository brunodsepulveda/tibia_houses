import React, { useState, useContext, useEffect } from 'react';
import HouseContext from '../../context/house/houseContext';

const HouseFilterByName = () => {
  const [text, setText] = useState('');

  const houseContext = useContext(HouseContext);

  const { houses, setFilterName, filterHousesByName } = houseContext;

  useEffect(() => {
    setText('');
  }, [houses]);

  const onChange = e => {
    setText(e.target.value);

    setFilterName(e.target.value);

    filterHousesByName(e.target.value);
  };

  return (
    <div>
      <form>
        <div className='form-group'>
          <label>Name Filter</label>
          <input
            className='form-control text-primary'
            autoComplete='off'
            type='text'
            name='text'
            placeholder='Filter Houses'
            value={text}
            onChange={onChange}
          />
        </div>
      </form>
    </div>
  );
};

export default HouseFilterByName;
