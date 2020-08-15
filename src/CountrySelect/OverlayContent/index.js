import React, { useRef } from 'react';

import List from './List';

import './style.scss';

const OverlayContent = ({
  bsPrefix,
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
      className={`${bsPrefix}__overlay-content`}
      style={{
        maxHeight: `${maxHeight}px`,
      }}
      ref={el}
    >

      {!(list.length >= 1) &&
        <div
          className={`${bsPrefix}__no-matches`}
        >

          {noMatchesText}

        </div>
      }

      {(list.length >= 1) &&
        <List
          bsPrefix={bsPrefix}
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
