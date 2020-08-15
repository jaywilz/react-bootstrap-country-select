import React, { forwardRef } from 'react';

import { classNames } from '../../../util';

import './style.scss';

const ListItem = forwardRef(({
  classPrefix,
  country,
  country: {
    flag,
  },
  active,
  countryLabelFormatter,
  flags,
  onClick,
}, ref) => {

  const className = classNames([
    `${classPrefix}__list-item`,
    active && 'active',
  ]);

  return (
    <li
      className={className}
      onClick={onClick}
      ref={ref}
    >
              
      {flags ? <span className={`${classPrefix}__flag`}>{flag}</span> : null}
  
      {countryLabelFormatter(country)}
  
    </li>
  );

});

export default ListItem;
