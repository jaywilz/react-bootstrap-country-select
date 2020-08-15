import React from 'react';
import renderer from 'react-test-renderer'

import ListItem from '../../../../../src/CountrySelect/OverlayContent/List/ListItem/index.js';

const CLASS_PREFIX = 'country-select';
const COUNTRY = {
  id: 'fr',
  name: 'France',
  flag: '🇫🇷',
  alpha2: 'fr',
  alpha3: 'fra',
  ioc: 'fra',
};
const ACTIVE = false;
const COUNTRY_LABEL_FORMATTER = country => country.name;
const FLAGS = true;
const ON_CLICK = () => {};
const REF = undefined;

describe('ListItem', () => {

  it('should render correctly with default props', () => {

    const tree = renderer
      .create(
        <ListItem
          classPrefix={CLASS_PREFIX}
          country={COUNTRY}
          active={ACTIVE}
          countryLabelFormatter={COUNTRY_LABEL_FORMATTER}
          flags={FLAGS}
          onClick={ON_CLICK}
          ref={REF}
        />
      )
      .toJSON();

    expect(tree).toMatchSnapshot();

  });

  it('should render correctly with custom classPrefix', () => {

    const tree = renderer
      .create(
        <ListItem
          classPrefix='custom-prefix'
          country={COUNTRY}
          active={ACTIVE}
          countryLabelFormatter={COUNTRY_LABEL_FORMATTER}
          flags={FLAGS}
          onClick={ON_CLICK}
          ref={REF}
        />
      )
      .toJSON();

    expect(tree).toMatchSnapshot();

  });

  it('should render correctly when active', () => {

    const tree = renderer
      .create(
        <ListItem
          classPrefix={CLASS_PREFIX}
          country={COUNTRY}
          active
          countryLabelFormatter={COUNTRY_LABEL_FORMATTER}
          flags={FLAGS}
          onClick={ON_CLICK}
          ref={REF}
        />
      )
      .toJSON();

    expect(tree).toMatchSnapshot();

  });

  it('should render correctly without flags', () => {

    const tree = renderer
      .create(
        <ListItem
          classPrefix={CLASS_PREFIX}
          country={COUNTRY}
          active={ACTIVE}
          countryLabelFormatter={COUNTRY_LABEL_FORMATTER}
          flags={false}
          onClick={ON_CLICK}
          ref={REF}
        />
      )
      .toJSON();

    expect(tree).toMatchSnapshot();

  });

});
