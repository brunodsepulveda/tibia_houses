import React from 'react';

const NavTab = ({ id, items }) => {
  const firstItem = items[0];
  const otherItems = items.slice(1);

  return (
    <div>
      <ul className='nav nav-tabs' id={id} role='tablist'>
        <li className='nav-item'>
          <a
            className='nav-link active'
            id={
              firstItem
                .toLowerCase()
                .split(' ')
                .join('_')
                .split("'")
                .join('_') + '-tab'
            }
            data-toggle='tab'
            href={
              '#' +
              firstItem
                .toLowerCase()
                .split(' ')
                .join('_')
                .split("'")
                .join('_')
            }
            role='tab'
            aria-controls={firstItem
              .toLowerCase()
              .split(' ')
              .join('_')
              .split("'")
              .join('_')}
            aria-selected='true'
          >
            {firstItem}
          </a>
        </li>
        {otherItems.map(item => {
          return (
            <li className='nav-item' key={item}>
              <a
                className='nav-link'
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
                aria-selected='false'
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
