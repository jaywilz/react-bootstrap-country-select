import React, { forwardRef } from 'react';

import { classNames } from '../../../util';

import './style.scss';

const ListItem = forwardRef(({
  bsPrefix,
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
    `${bsPrefix}__list-item`,
    active && 'active',
  ]);

  return (
    <div
      className={className}
      onClick={onClick}
      ref={ref}
    >
              
      {flags ? <span className={`${bsPrefix}__flag`}>{flag}</span> : null}
  
      {countryLabelFormatter(country)}
  
    </div>
  );

});

export default ListItem;
