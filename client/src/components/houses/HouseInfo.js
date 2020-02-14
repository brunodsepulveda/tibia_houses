import React, { useContext, useEffect, Fragment } from 'react';
import { Link } from 'react-router-dom';
import HouseContext from '../../context/house/houseContext';
import Spinner from '../layout/Spinner';
import './HouseInfo.css';

const HouseInfo = ({ match }) => {
  const houseContext = useContext(HouseContext);

  const { getHouse, house, loading } = houseContext;

  useEffect(() => {
    getHouse(match.params.id, match.params.world);
    // eslint-disable-next-line
  }, []);

  const importImages = r => {
    return r.keys().map(r);
  };

  const allImages = importImages(
    require.context(`../../assets/img`, false, /\.(png|jpe?g|svg)$/)
  );

  let images = allImages.filter(image => {
    return image.slice(14, 19) === match.params.id;
  });

  if (
    loading ||
    (Object.entries(house).length === 0 && house.constructor === Object) ||
    house.name === ''
  ) {
    return (
      <Fragment>
        <div className='row'>
          <div className='col-xl-2 col-lg-4'>
            <Link to='/' className='btn btn-primary btn-lg btn-block mb-5'>
              Back
            </Link>
          </div>
          <div className='col-xl-10 col-lg-8'>
            <Spinner />
          </div>
          )
        </div>
      </Fragment>
    );
  }

  return (
    <Fragment>
      <div className='row'>
        <div className='col-xl-2 col-lg-4'>
          <Link to='/' className='btn btn-primary btn-lg btn-block  mb-5'>
            Back
          </Link>
        </div>

        <div className='col-xl-10 col-lg-8'>
          <div className='row justify-content-center'>
            <div className='card w-75'>
              <h5 className='card-header text-center'>{house.name}</h5>
              <div className='row text-center'>
                <div className='col-lg-6'>
                  <div className='card-body'>
                    <ul className='list-group list-group-flush'>
                      <li className='list-group-item'>
                        World:{' '}
                        {house.world &&
                          house.world[0].toUpperCase() + house.world.slice(1)}
                      </li>
                      <li className='list-group-item'>Rent: {house.rent}</li>
                    </ul>
                  </div>
                </div>
                <div className='col-lg-6'>
                  <div className='card-body'>
                    <ul className='list-group list-group-flush'>
                      <li className='list-group-item'>Beds: {house.beds}</li>
                      <li className='list-group-item'>Size: {house.size}</li>
                    </ul>
                  </div>
                </div>

                <div className='col'>
                  <div className='card-body'>
                    <ul className='list-group list-group-flush'>
                      <li className='list-group-item'>
                        {house.status.original}
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className='card-body'>
                {images.map(image => {
                  return (
                    image.slice(14, 19) === match.params.id && (
                      <img
                        className='d-inline-block image-info'
                        key={image.slice(14, 21)}
                        src={image}
                        alt=''
                      ></img>
                    )
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default HouseInfo;
