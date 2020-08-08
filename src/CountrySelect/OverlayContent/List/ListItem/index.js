import React, { forwardRef } from 'react';

import style from './style.module.scss';

const ListItem = forwardRef(({
  country,
  country: {
    flag,
  },
  active,
  countryLabelFormatter,
  flags,
  onClick,
}, ref) => {

  const className = `${style['list-item']} ${active ? style.active : ''}`;

  return (
    <div
      className={className}
      onClick={onClick}
      ref={ref}
    >
              
      {flags ? <span className={style.flag}>{flag}</span> : null}
  
      {countryLabelFormatter(country)}
  
    </div>
  );

});

export default ListItem;
