import React from 'react';
import renderer from 'react-test-renderer'

import List from '../../../../src/CountrySelect/OverlayContent/List/index.js';

const CLASS_PREFIX = 'country-select';
const CONTAINER_EL = undefined;
const LIST = [
  {
    id: 'fr',
    name: 'France',
    flag: '🇫🇷',
    alpha2: 'fr',
    alpha3: 'fra',
    ioc: 'fra',
  },
  {
    id: 'de',
    name: 'Germany',
    flag: '🇩🇪',
    alpha2: 'de',
    alpha3: 'deu',
    ioc: 'ger',
  },
]
const ACTIVE_ITEM_INDEX = -1;
const COUNTRY_LABEL_FORMATTER = country => country.name;
const FLAGS = true;
const ON_ITEM_CLICK = () => {};
const ON_ACTIVE_ITEM_CUT_OVERFLOW = () => {};

describe('List', () => {

  it('should render correctly with default props', () => {

    const tree = renderer
      .create(
        <List
          classPrefix={CLASS_PREFIX}
          containerEl={CONTAINER_EL}
          list={LIST}
          activeItemIndex={ACTIVE_ITEM_INDEX}
          countryLabelFormatter={COUNTRY_LABEL_FORMATTER}
          flags={FLAGS}
          onItemClick={ON_ITEM_CLICK}
          onActiveItemOverflow={ON_ACTIVE_ITEM_CUT_OVERFLOW}
        />
      )
      .toJSON();

    expect(tree).toMatchSnapshot();

  });

  it('should render correctly with custom class prefix', () => {

    const tree = renderer
      .create(
        <List
          classPrefix='custom-prefix'
          containerEl={CONTAINER_EL}
          list={LIST}
          activeItemIndex={ACTIVE_ITEM_INDEX}
          countryLabelFormatter={COUNTRY_LABEL_FORMATTER}
          flags={FLAGS}
          onItemClick={ON_ITEM_CLICK}
          onActiveItemOverflow={ON_ACTIVE_ITEM_CUT_OVERFLOW}
        />
      )
      .toJSON();

    expect(tree).toMatchSnapshot();

  });

  it('should render correctly with active item index', () => {

    const tree = renderer
      .create(
        <List
          classPrefix={CLASS_PREFIX}
          containerEl={CONTAINER_EL}
          list={LIST}
          activeItemIndex={1}
          countryLabelFormatter={COUNTRY_LABEL_FORMATTER}
          flags={FLAGS}
          onItemClick={ON_ITEM_CLICK}
          onActiveItemOverflow={ON_ACTIVE_ITEM_CUT_OVERFLOW}
        />
      )
      .toJSON();

    expect(tree).toMatchSnapshot();

  });

});
