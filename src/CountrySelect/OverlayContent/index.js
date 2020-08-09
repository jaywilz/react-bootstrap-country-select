import React, { useRef } from 'react';

import List from './List';

import style from './style.module.scss';

const OverlayContent = ({
  list,
  activeListItemIndex,
  countryLabelFormatter,
  flags,
  noMatchesText,
  maxHeight = 225,
  onListItemClick,
}) => {

  const el = useRef(null);

  const handleAciveItemCutoff = overflowAmount => {

    el.current.scrollTop = el.current.scrollTop + overflowAmount;

  };

  return (
    <div
      className={style['overlay-content']}
      style={{
        maxHeight: `${maxHeight}px`,
      }}
      ref={el}
    >

      {!(list.length >= 1) &&
        <div
          className={style['no-matches']}
        >

          {noMatchesText}

        </div>
      }

      {(list.length >= 1) &&
        <List
          containerEl={el.current}
          list={list}
          activeItemIndex={activeListItemIndex}
          countryLabelFormatter={countryLabelFormatter}
          flags={flags}
          onItemClick={onListItemClick}
          onActiveItemCutOverflow={handleAciveItemCutoff}
        />
      }
    </div>
  );

};

export default OverlayContent;
