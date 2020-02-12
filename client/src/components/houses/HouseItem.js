import React from 'react';
import { Link } from 'react-router-dom';
import './HouseItem.css';

const HouseItem = ({ house }) => {
  let border;

  if (house.status === 'rented') {
    border = 'border-danger';
  } else {
    border = 'border-success';
  }

  return (
    <div className={`card bg-light ${border} custom-col max-w`}>
      <div className='row align-items-center justify-content-center'>
        <div className='col-5 min-w text-center pr-0'>
          <img
            src={`https://static.tibia.com/images/houses/house_${house.houseid}.png`}
            alt=''
          />
        </div>

        <div className='col-7 pl-0'>
          <div className='card-body pl-0'>
            <h5 className='card-title'>{house.name}</h5>
            <ul className='list-group list-group-flush'>
              <li className='list-group-item'>Size: {house.size}</li>
              <li className='list-group-item'>Rent: {house.rent}</li>
              <li className='list-group-item'>
                Status: {house.status[0].toUpperCase() + house.status.slice(1)}
              </li>
            </ul>
          </div>
          <div className='card-body pt-0 pl-0'>
            <Link to='/' className='btn btn-primary'>
              More Info
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HouseItem;
