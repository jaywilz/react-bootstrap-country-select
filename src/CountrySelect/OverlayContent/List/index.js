import React, { useRef, createRef, useEffect } from 'react';

import ListItem from './ListItem';

import './style.scss';

const List = ({
  bsPrefix,
  containerEl,
  list,
  activeItemIndex,
  countryLabelFormatter,
  flags,
  onItemClick,
  onActiveItemCutOverflow
}) => {

  const listEl = useRef(null);
  const activeItemEl = createRef(null);

  useEffect(() => {

    if (containerEl && activeItemEl.current) {

      const containerHeight = containerEl.offsetHeight;
      const containerScrollTop = containerEl.scrollTop;
      const activeItemTop = activeItemEl.current.offsetTop;
      const activeItemHeight = activeItemEl.current.offsetHeight;
      const activeItemBottom = activeItemTop + activeItemHeight;
      const overflowOffTopAmount = containerScrollTop - activeItemTop;
      const overflowOffBottomAmount = activeItemBottom - (containerHeight + containerScrollTop);
      const isOverflowBeyondTop = overflowOffTopAmount > 0;
      const isOverflowBeyondBottom = overflowOffBottomAmount > 0;

      // TODO: handle overlay beyond window bottom

      if (isOverflowBeyondTop) onActiveItemCutOverflow(-overflowOffTopAmount);
      if (isOverflowBeyondBottom) onActiveItemCutOverflow(overflowOffBottomAmount);

    }

  }, [ containerEl, listEl, activeItemEl, onActiveItemCutOverflow ]);

  return (
    <ul
      className={`${bsPrefix}__list`}
      ref={listEl}
    >

      { list.map((country, itemIndex) => (
        <ListItem
          key={country.alpha2}
          bsPrefix={bsPrefix}
          country={country}
          active={itemIndex === activeItemIndex}
          countryLabelFormatter={countryLabelFormatter}
          flags={flags}
          onClick={() => onItemClick(itemIndex)}
          ref={itemIndex === activeItemIndex ? activeItemEl : undefined}
        />
          
      )) }
      
    </ul>
  
  );

};

export default List;
