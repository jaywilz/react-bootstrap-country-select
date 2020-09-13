import React, { useState, useRef, useEffect, useReducer } from 'react';
import PropTypes from 'prop-types';
import { InputGroup, FormControl, Overlay } from 'react-bootstrap';

import { COUNTRIES } from './data';

import {
  applyExclusionsAndAdditions,
  getInitialList,
  removeEmojiFlag,
  getUpdatedList,
  classNames,
} from './util';

import OverlayContent from './OverlayContent';

import { DEFAULT_CLASS_PREFIX } from './constants';

import reducer, { INITIAL_STATE } from './reducer';

import {
  init,
  focus,
  blur,
  textChange,
  activeListItemChange,
  countrySelect,
  clear,
} from './actions';

import './style.scss';

const CountrySelect = ({
  value,
  onChange = () => {},
  onTextChange,
  countries = [ ...COUNTRIES ],
  exclusions,
  additions,
  valueAs = 'object',
  flags = true,
  flush = true,
  disabled = false,
  placeholder = 'Type or select country...',
  noMatchesText = 'No matches',
  size,
  sort, // e.g. (c1, c2) => c1.name < c2.name ? -1 : (c1.name > c2.name ? 1 : 0),
  matchNameFromStart = true,
  matchAbbreviations = false,
  countryLabelFormatter = ({ name }) => name,
  throwInvalidValueError = false, 
  listMaxHeight,
  formControlProps = {},
  overlayProps = {},
  classPrefix = DEFAULT_CLASS_PREFIX,
  className,
}) => {

  const inputGroupRef = useRef(null);
  const formControlRef = useRef(null);
  const hasInitRef = useRef(false);
  const [ width, setWidth ] = useState(-1);

  const [ {
    focused,
    inputText,
    list,
    activeListItemIndex,
    combinedCountries,
  }, dispatch ] = useReducer(reducer, INITIAL_STATE);

  const handleFocus = focus(dispatch);
  const handleBlur = blur(dispatch);
  const handleTextChange = textChange(dispatch);
  const handleListActiveItemChange = activeListItemChange(dispatch);
  const handleCountrySelect = countrySelect(dispatch);
  const handleClear = clear(dispatch);

  const selectedCountry = value ? (combinedCountries || []).find(country => country.id === (value.id || value)) : null;

  if (throwInvalidValueError && value && !selectedCountry)
    throw new Error(`No matching country for value: ${JSON.stringify(value)}`);

  useEffect(() => {

    if (hasInitRef.current) return;

    const combinedCountries = applyExclusionsAndAdditions(countries, exclusions, additions);

    const sorted = getInitialList(combinedCountries, sort);

    init(dispatch)(sorted);

    hasInitRef.current = true;

  }, [ countries, exclusions, additions, sort ]);

  useEffect(() => {

    setWidth(inputGroupRef.current.offsetWidth);

  }, [ inputGroupRef ]);

  const select = listItemIndex => {

    const country = list[listItemIndex];

    handleCountrySelect();
    onChange(valueAs === 'id' ? country.id : country);

  };

  const escape = () => {

    handleClear();
    onChange(null);

  };

  const inputChange = text => {

    if (selectedCountry && flags) {

      text = removeEmojiFlag(text);

    }

    const [ updatedList, updatedActiveListItemIndex ]
      = getUpdatedList(text, list, activeListItemIndex, combinedCountries, sort, matchNameFromStart, matchAbbreviations);

    handleTextChange(text, updatedList, updatedActiveListItemIndex);

    if (onTextChange) onTextChange(text);
    if (value) onChange(null);

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

      if (activeListItemIndex >= 0) select(activeListItemIndex)

    } else if (ev.key === 'Escape') {

      escape();

    }

  };
  
  const classes = classNames([
    className,
    classPrefix,
    flush && `${classPrefix}--flush`,
  ]);

  return (
    <div className={classes}>

      <InputGroup
        ref={inputGroupRef}
        className={`${classPrefix}__input-group`}
        size={size}
      >

        { (!flush && flags) && 
          <InputGroup.Prepend>

            <InputGroup.Text
              className={`${classPrefix}__input-group__flag`}
            >

              {selectedCountry ? selectedCountry.flag : ''}
            
            </InputGroup.Text>
            
          </InputGroup.Prepend>
        }

        <FormControl
          ref={formControlRef}
          className={`${classPrefix}__form-control`}
          value={selectedCountry ? `${flush && flags ? selectedCountry.flag + '   ' : ''}${selectedCountry.name}` : inputText}
          onKeyDown={handleKey}
          onChange={ev => inputChange(ev.target.value, ev)}
          onFocus={handleFocus}
          onBlur={handleBlur}
          placeholder={placeholder}
          disabled={disabled}
          spellCheck={false}
          autoComplete='new-value'
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
              classPrefix={classPrefix}
              list={list}
              activeListItemIndex={activeListItemIndex}
              countryLabelFormatter={countryLabelFormatter}
              flags={flags}
              noMatchesText={noMatchesText}
              maxHeight={listMaxHeight}
              onListItemClick={select}
            />

          </div>

        )}

      </Overlay>
    
    </div>
  );

};

CountrySelect.propTypes = {
  value: PropTypes.oneOfType([
    PropTypes.shape({
      id: PropTypes.string.isRequired,
    }),
    PropTypes.string,
  ]),
  onChange: PropTypes.func,
  onTextChange: PropTypes.func,
  countries: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
  })),
  exclusions: PropTypes.arrayOf(PropTypes.string),
  additions: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
  })),
  valueAs: PropTypes.oneOf([ 'object', 'id' ]),
  flags: PropTypes.bool,
  flush: PropTypes.bool,
  disabled: PropTypes.bool,
  placeholder: PropTypes.node,
  noMatchesText: PropTypes.node,
  size: PropTypes.oneOf([ 'sm', 'lg' ]),
  sort: PropTypes.func,
  matchNameFromStart: PropTypes.bool,
  matchAbbreviations: PropTypes.bool,
  countryLabelFormatter: PropTypes.func,
  throwInvalidValueError: PropTypes.bool, 
  listMaxHeight: PropTypes.number,
  formControlProps: PropTypes.object,
  overlayProps: PropTypes.object,
};

export default CountrySelect;
