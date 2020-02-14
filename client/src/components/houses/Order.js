import React, { useState, useContext } from 'react';
import HouseContext from '../../context/house/houseContext';

const Order = () => {
  const [order, setOrder] = useState('name');

  const houseContext = useContext(HouseContext);

  const { changeOrder } = houseContext;

  const onChangeOrder = e => {
    setOrder(e.target.value);

    changeOrder(e.target.value);
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

          {/* Status Radio */}
          <div className='custom-control custom-radio'>
            <input
              type='radio'
              name='status'
              id='orderStatus'
              value='status'
              className='custom-control-input'
              checked={order === 'status'}
              onChange={onChangeOrder}
            />
            <label htmlFor='orderStatus' className='custom-control-label'>
              Status
            </label>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Order;
