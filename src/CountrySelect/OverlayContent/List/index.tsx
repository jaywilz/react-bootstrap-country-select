import React, { useRef, createRef, useEffect, ReactNode, Ref } from 'react';

import ICountry from '../../ICountry';

import ListItem from './ListItem';

import './style.scss';

export interface ListProps {
  classPrefix: string;
  containerEl: HTMLDivElement;
  list: ICountry[];
  activeItemIndex: number;
  countryLabelFormatter: (country: ICountry) => ReactNode;
  flags: boolean;
  onItemClick: (itemIndex: number) => void;
  onActiveItemOverflow: (overflowAmount: number) => void;
}

const List = ({
  classPrefix,
  containerEl,
  list,
  activeItemIndex,
  countryLabelFormatter,
  flags,
  onItemClick,
  onActiveItemOverflow,
}: ListProps) => {

  const listEl = useRef(null);
  // const activeItemEl = createRef();
  const activeItemEl = useRef<HTMLLIElement>();

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

      if (isOverflowBeyondTop) onActiveItemOverflow(-overflowOffTopAmount);
      if (isOverflowBeyondBottom) onActiveItemOverflow(overflowOffBottomAmount);

    }

  }, [ containerEl, listEl, activeItemEl, onActiveItemOverflow ]);

  return (
    <ul
      className={`${classPrefix}__list`}
      ref={listEl}
    >

      { list.map((country, itemIndex) => (
        <ListItem
          key={country.alpha2}
          classPrefix={classPrefix}
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
