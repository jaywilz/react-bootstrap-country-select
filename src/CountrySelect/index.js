import React, { useState, useRef, useEffect, useReducer } from 'react';
import { InputGroup, FormControl, Overlay } from 'react-bootstrap';

import OverlayContent from './OverlayContent';

import { COUNTRIES } from './data';

import reducer, { INITIAL_STATE } from './reducer';

import {
  mount,
  focus,
  blur,
  textChange,
  activeListItemChange,
  textCompletion,
  clear,
} from './actions';

import style from './style.module.scss';

const CountrySelect = ({
  value,
  onChange,
  onTextChange,
  countries = COUNTRIES,
  exclusions = [],
  additions = [],
  valueAs = 'object', // 'object' | 'id'
  displayDropdownOnFocus = false,
  debounce = false,
  multipleSelect = false,
  listItemSize = null,
  matchNameFromStart = true,
  matchAbbreviations = false,
  flags = true,
  sortBy = 'name',
  scrollbarVisible = false,
  countryLabelFormatter = ({ name }) => name,
  autoComplete = true,
  placeholder = 'Type or select country...',
  listWidth = 'auto',
  listMaxWidth = 'auto',
  listMaxHeight = 'auto',
  formControlProps = {},
  overlayProps = {},
  noMatchesText = 'No matches',
  size, // 'sm' | 'lg'
  throwInvalidValueError = true, 
}) => {

  const inputGroupRef = useRef(null);
  const formControlRef = useRef(null);
  const isMounted = useRef(false);
  const [ width, setWidth ] = useState(-1);

  const [ {
    focused,
    inputText,
    list,
    activeListItemIndex,
  }, dispatch ] = useReducer(reducer, INITIAL_STATE);

  const handleFocus = focus(dispatch);
  const handleBlur = blur(dispatch);
  const handleTextChange = textChange(dispatch);
  const handleListActiveItemChange = activeListItemChange(dispatch);
  const handleTextCompletion = textCompletion(dispatch);
  const handleClear = clear(dispatch);

  const selectedCountry = value ? countries.find(country => country.id === (value.id || value)) : null;

  if (value && !selectedCountry && throwInvalidValueError) throw new Error(`No matching country for value: ${JSON.stringify(value)}`);

  useEffect(() => {

    mount(dispatch)({
      matchNameFromStart,
      matchAbbreviations,
      sortBy,
    }, countries);

  }, [ matchNameFromStart, matchAbbreviations, sortBy, countries ]);

  useEffect(() => {

    setWidth(inputGroupRef.current.offsetWidth);

  }, [ inputGroupRef ]);

  useEffect(() => {

    if (isMounted.current && onTextChange) {

      onTextChange(inputText);
      
      if (value) onChange(null);

    } else {

      isMounted.current = true;

    }

  }, [ onTextChange, inputText ]);

  const handleListItemClick = listItemIndex => {

    onChange(valueAs === 'id' ? list[listItemIndex].id : list[listItemIndex]);

  };

  const handleKey = ev => {

    if (ev.key === 'ArrowUp') {

      ev.preventDefault();

      const newIndex = activeListItemIndex <= 0 ? list.length - 1 : activeListItemIndex - 1;
      handleListActiveItemChange(newIndex);

    } else if (ev.key === 'ArrowDown') {

      const newIndex = activeListItemIndex >= list.length - 1 ? 0 : activeListItemIndex + 1;
      handleListActiveItemChange(newIndex);

    } else if (ev.key === 'Enter') {

      onChange(valueAs === 'id' ? list[activeListItemIndex].id : list[activeListItemIndex]);

    } else if (ev.key === 'Escape') {

      handleClear();
      onChange(null);

    } else if (ev.key === 'ArrowRight') {

      handleTextCompletion();

    }

  };

  return (
    <div className={style['country-select']}>

      <InputGroup
        ref={inputGroupRef}
        className={style['input-group']}
      >

        { selectedCountry &&
          <InputGroup.Prepend>

            <InputGroup.Text
              className={style['input-group__flag']}
            >

              {selectedCountry ? selectedCountry.flag : ''}
            
            </InputGroup.Text>
            
          </InputGroup.Prepend>
        }

        <FormControl
          ref={formControlRef}
          className={style['form-control']}
          value={selectedCountry ? selectedCountry.name : inputText}
          onKeyDown={handleKey}
          onChange={ev => handleTextChange(ev.target.value)}
          onFocus={handleFocus}
          onBlur={handleBlur}
          placeholder={placeholder}
          {...formControlProps}
        />

      </InputGroup>

      <Overlay
        target={inputGroupRef.current}
        rootClose
        placement='bottom-start'
        show={focused && !selectedCountry}
        onHide={() => {}}
        transition
        {...overlayProps}
      >

        {({ placement, arrowProps, show: _show, popper, ...props }) => (

          <div
            {...props}
            style={{
              width: (width > 0) ? `${width}px` : 'calc(100% - 10px)',
              ...props.style,
            }}
          >

            <OverlayContent
              list={list}
              activeListItemIndex={activeListItemIndex}
              countryLabelFormatter={countryLabelFormatter}
              flags={flags}
              noMatchesText={noMatchesText}
              onListItemClick={handleListItemClick}
            />

          </div>

        )}

      </Overlay>
    
    </div>
  );

};

export default CountrySelect;
