import React, { useState } from 'react';

const HouseFilterByAttribute = () => {
  const [filter, setFilter] = useState({
    minSize: '',
    maxRent: '',
    status: 'all',
    type: 'houses'
  });

  const onChangeStatus = e => {
    setFilter({
      ...filter,
      status: e.target.value
    });
  };

  const onChangeType = e => {
    setFilter({
      ...filter,
      type: e.target.value
    });
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
              type='text'
              id='minSize'
              name='minSize'
              className='form-control'
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
              type='text'
              id='maxRent'
              name='maxRent'
              className='form-control'
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

        <div className='form-group'>
          <button type='submit' className='btn btn-primary btn-lg btn-block'>
            Filter
          </button>
        </div>
      </form>
    </div>
  );
};

export default HouseFilterByAttribute;
