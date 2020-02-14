import React from 'react';
import { Link } from 'react-router-dom';

const HouseList = ({ houses }) => {
  return (
    <div>
      <table className='table table-hover'>
        <thead>
          <tr>
            <th scope='col'>Map</th>
            <th scope='col'>Name</th>
            <th scope='col'>Size</th>
            <th scope='col'>Rent</th>
            <th scope='col'>Status</th>
            <th scope='col'></th>
          </tr>
        </thead>
        <tbody>
          {houses.map(house => {
            let tableColor;

            if (house.status === 'rented') {
              tableColor = 'table-success';
            } else if (house.status === 'auctioned (no bid yet)') {
              tableColor = 'table-danger';
            } else {
              tableColor = 'table-warning';
            }

            return (
              <tr key={house.houseid}>
                <th scope='row'>
                  <img
                    src={`https://static.tibia.com/images/houses/house_${house.houseid}.png`}
                    alt=''
                  />
                </th>
                <td>{house.name}</td>
                <td>{house.size}</td>
                <td>{house.rent}</td>
                <td>{house.status[0].toUpperCase() + house.status.slice(1)}</td>
                <td>
                  <Link to='/' className='btn btn-primary'>
                    More Info
                  </Link>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default HouseList;
