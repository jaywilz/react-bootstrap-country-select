import React, { useRef } from 'react';

import List from './List';

import './style.scss';

const OverlayContent = ({
  classPrefix,
  list,
  activeListItemIndex,
  countryLabelFormatter,
  flags,
  noMatchesText,
  maxHeight = 225,
  onListItemClick,
}) => {

  const el = useRef(null);

  const handleAciveItemCutOff = overflowAmount => {

    el.current.scrollTop = el.current.scrollTop + overflowAmount;

  };

  return (
    <div
      className={`${classPrefix}__overlay-content`}
      style={{
        maxHeight: `${maxHeight}px`,
      }}
      ref={el}
    >

      {!(list.length >= 1) &&
        <div
          className={`${classPrefix}__no-matches`}
        >

          {noMatchesText}

        </div>
      }

      {(list.length >= 1) &&
        <List
          classPrefix={classPrefix}
          containerEl={el.current}
          list={list}
          activeItemIndex={activeListItemIndex}
          countryLabelFormatter={countryLabelFormatter}
          flags={flags}
          onItemClick={onListItemClick}
          onActiveItemOverflow={handleAciveItemCutOff}
        />
      }
    </div>
  );

};

export default OverlayContent;
