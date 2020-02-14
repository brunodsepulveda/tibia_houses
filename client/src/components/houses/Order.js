import React, { useState } from 'react';

const Order = () => {
  const [order, setOrder] = useState('name');

  const onChangeOrder = e => {
    setOrder(e.target.value);
  };

  return (
    <div>
      <form>
        {/* Order Radio */}
        <div className='form-group'>
          <label>Order By</label>
          {/* Name Radio */}
          <div className='custom-control custom-radio'>
            <input
              type='radio'
              name='name'
              id='orderName'
              value='name'
              className='custom-control-input'
              checked={order === 'name'}
              onChange={onChangeOrder}
            />
            <label htmlFor='orderName' className='custom-control-label'>
              Name
            </label>
          </div>

          {/* Size Radio */}
          <div className='custom-control custom-radio'>
            <input
              type='radio'
              name='size'
              id='orderSize'
              value='size'
              className='custom-control-input'
              checked={order === 'size'}
              onChange={onChangeOrder}
            />
            <label htmlFor='orderSize' className='custom-control-label'>
              Size
            </label>
          </div>

          {/* Rent Radio */}
          <div className='custom-control custom-radio'>
            <input
              type='radio'
              name='rent'
              id='orderRent'
              value='rent'
              className='custom-control-input'
              checked={order === 'rent'}
              onChange={onChangeOrder}
            />
            <label htmlFor='orderRent' className='custom-control-label'>
              Rent
            </label>
          </div>
        </div>

        <div className='form-group'>
          <button type='submit' className='btn btn-primary btn-lg btn-block'>
            Order
          </button>
        </div>
      </form>
    </div>
  );
};

export default Order;
