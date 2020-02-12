import React from 'react';

const NavTab = ({ id, items }) => {
  return (
    <div>
      <ul className='nav nav-tabs' id={id} role='tablist'>
        {items.map((item, index) => {
          return (
            <li className='nav-item' key={item}>
              <a
                className={`nav-link${index === 0 ? ' active' : ''}`}
                id={
                  item
                    .toLowerCase()
                    .split(' ')
                    .join('_')
                    .split("'")
                    .join('_') + 'tab'
                }
                data-toggle='tab'
                href={
                  '#' +
                  item
                    .toLowerCase()
                    .split(' ')
                    .join('_')
                    .split("'")
                    .join('_')
                }
                role='tab'
                aria-controls={item
                  .toLowerCase()
                  .split(' ')
                  .join('_')
                  .split("'")
                  .join('_')}
                aria-selected={index === 0 ? 'true' : 'false'}
              >
                {item}
              </a>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default NavTab;
