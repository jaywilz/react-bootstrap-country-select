import React, { useState, useRef, useEffect, useReducer, ReactNode, ChangeEvent } from 'react';
// import PropTypes from 'prop-types';
import { InputGroup, FormControl, Overlay } from 'react-bootstrap';

import { COUNTRIES } from './data';

import {
  applyExclusionsAndAdditions,
  getInitialList,
  removeEmojiFlag,
  getUpdatedList,
  classNames,
} from './util';

import ICountry from './ICountry';

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

export interface CountrySelectProps {
  value: string | ICountry;
  onChange: (countryIdOrCountry: string | ICountry) => void;
  onTextChange: (text: string, changeEvent: ChangeEvent) => void;
  countries?: ICountry[];
  exclusions?: string[];
  additions?: ICountry[];
  valueAs?: 'id' | 'object';
  flags?: boolean;
  flush?: boolean;
  disabled?: boolean;
  placeholder?: ReactNode;
  noMatchesText?: ReactNode;
  size?: 'sm' | 'lg';
  sort?: (c1: ICountry, c2: ICountry) => number; 
  matchNameFromStart?: boolean;
  matchAbbreviations?: boolean;
  countryLabelFormatter?: (country: ICountry) => ReactNode;
  throwInvalidValueError?: boolean;
  listMaxHeight?: number;
  closeOnSelect?: true;
  formControlProps?: any; // TODO
  overlayProps?: any; // TODO
  classPrefix?: string;
  className?: string;
}

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
  closeOnSelect = true,
  formControlProps = {},
  overlayProps = {},
  classPrefix = DEFAULT_CLASS_PREFIX,
  className,
}: CountrySelectProps) => {

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

  const getCountryId = (value: ICountry | string): string => (typeof value === 'string' ? value : value.id);

  const selectedCountry = value ? (combinedCountries || []).find(country => country.id === getCountryId(value)) : null;

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

  const inputChange = (text, ev) => {

    if (selectedCountry && flags) {

      text = removeEmojiFlag(text);

    }

    const [ updatedList, updatedActiveListItemIndex ]
      = getUpdatedList(text, list, activeListItemIndex, combinedCountries, sort, matchNameFromStart, matchAbbreviations);

    handleTextChange(text, updatedList, updatedActiveListItemIndex);

    if (onTextChange) onTextChange(text, ev);
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
        show={focused && (!selectedCountry || !closeOnSelect)} // experimental; not documented
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

export default CountrySelect;
