import React from 'react';
import { Link } from 'react-router-dom';
import './HouseItem.css';

const HouseItem = ({ house }) => {
  let color;
  let badgeName;

  if (house.status === 'rented') {
    color = 'danger';
    badgeName = 'Rented';
  } else if (house.status === 'auctioned (no bid yet)') {
    color = 'success';
    badgeName = 'No bid';
  } else {
    color = 'warning';
    badgeName = house.status
      .split(' ')
      .slice(3, 6)
      .join(' ')
      .slice(0, -1);
  }

  return (
    <div className={`card bg-light border-${color} custom-col max-w`}>
      <div className='row align-items-center justify-content-center'>
        <div className='col-5 min-w text-center pr-0'>
          <span className={`d-block mb-2 mx-auto badge-w badge badge-${color}`}>
            {badgeName}
          </span>
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
