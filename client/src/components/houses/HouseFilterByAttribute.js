import React, { useState, useContext } from 'react';
import HouseContext from '../../context/house/houseContext';

const HouseFilterByAttribute = () => {
  const [filter, setFilter] = useState({
    minSize: '',
    maxRent: '',
    status: 'all',
    type: 'houses'
  });

  const houseContext = useContext(HouseContext);

  const { setFilters, filterHousesByAttributes } = houseContext;

  const onChangeStatus = e => {
    setFilter({
      ...filter,
      status: e.target.value
    });

    setFilters('status', e.target.value);

    filterHousesByAttributes(
      filter.minSize,
      filter.maxRent,
      e.target.value,
      filter.type
    );
  };

  const onChangeType = e => {
    setFilter({
      ...filter,
      type: e.target.value
    });

    setFilters('type', e.target.value);

    filterHousesByAttributes(
      filter.minSize,
      filter.maxRent,
      filter.status,
      e.target.value
    );
  };

  const onChange = e => {
    setFilter({
      ...filter,
      [e.target.name]: e.target.value
    });

    setFilters(e.target.name, e.target.value);

    if (e.target.name === 'minSize') {
      filterHousesByAttributes(
        e.target.value,
        filter.maxRent,
        filter.status,
        filter.type
      );
    } else if (e.target.name === 'maxRent') {
      filterHousesByAttributes(
        filter.minSize,
        e.target.value,
        filter.status,
        filter.type
      );
    }
  };

  return (
    <div>
      <form>
        <div className='form-group'>
          <label>Attribute Filter</label>
        </div>

        {/* Min Size */}
        <div className='form-group'>
          <div className='input-group mb-3'>
            <div className='input-group-prepend'>
              <span className='input-group-text'>Min Size</span>
            </div>
            <input
              className='form-control'
              autoComplete='off'
              type='number'
              id='minSize'
              name='minSize'
              value={filter.minSize}
              onChange={onChange}
            />
          </div>
        </div>

        {/* Max Rent */}
        <div className='form-group'>
          <div className='input-group mb-3'>
            <div className='input-group-prepend'>
              <span className='input-group-text'>Max Rent</span>
            </div>
            <input
              className='form-control'
              type='number'
              id='maxRent'
              name='maxRent'
              value={filter.maxRent}
              onChange={onChange}
            />
          </div>
        </div>

        {/* Status Radio */}
        <div className='form-group'>
          <label>Status</label>
          {/* All Radio */}
          <div className='custom-control custom-radio'>
            <input
              type='radio'
              name='all'
              id='statusAll'
              value='all'
              className='custom-control-input'
              checked={filter.status === 'all'}
              onChange={onChangeStatus}
            />
            <label htmlFor='statusAll' className='custom-control-label'>
              All
            </label>
          </div>

          {/* Auctioned Radio */}
          <div className='custom-control custom-radio'>
            <input
              type='radio'
              name='auctioned'
              id='statusAuctioned'
              value='auctioned'
              className='custom-control-input'
              checked={filter.status === 'auctioned'}
              onChange={onChangeStatus}
            />
            <label htmlFor='statusAuctioned' className='custom-control-label'>
              Auctioned
            </label>
          </div>

          {/* Rented Radio */}
          <div className='custom-control custom-radio'>
            <input
              type='radio'
              name='rented'
              id='statusRented'
              value='rented'
              className='custom-control-input'
              checked={filter.status === 'rented'}
              onChange={onChangeStatus}
            />
            <label htmlFor='statusRented' className='custom-control-label'>
              Rented
            </label>
          </div>
        </div>

        {/* Type Radio */}
        <div className='form-group'>
          <label>Type</label>
          {/* Houses Radio */}
          <div className='custom-control custom-radio'>
            <input
              type='radio'
              name='houses'
              id='typeHouses'
              value='houses'
              className='custom-control-input'
              checked={filter.type === 'houses'}
              onChange={onChangeType}
            />
            <label htmlFor='typeHouses' className='custom-control-label'>
              Houses
            </label>
          </div>

          {/* Guildhalls Radio */}
          <div className='custom-control custom-radio'>
            <input
              type='radio'
              name='guildhalls'
              id='typeGuildhalls'
              value='guildhalls'
              className='custom-control-input'
              checked={filter.type === 'guildhalls'}
              onChange={onChangeType}
            />
            <label htmlFor='typeGuildhalls' className='custom-control-label'>
              Guildhalls
            </label>
          </div>
        </div>
      </form>
    </div>
  );
};

export default HouseFilterByAttribute;
