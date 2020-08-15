import React from 'react';
import renderer from 'react-test-renderer'

import OverlayContent from '../../../src/CountrySelect/OverlayContent/index.js';

const BS_PREFIX = 'country-select';
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
const ACTIVE_LIST_ITEM_INDEX = -1;
const COUNTRY_LABEL_FORMATTER = country => country.name;
const FLAGS = true;
const NO_MATCHES_TEXT = 'no matches';
const MAX_HEIGHT = 250;
const ON_LIST_ITEM_CLICK = () => {};

describe('OverlayContent', () => {

  it('should render correctly', () => {

    const tree = renderer
      .create(
        <OverlayContent
          bsPrefix={BS_PREFIX}
          list={LIST}
          activeListItemIndex={ACTIVE_LIST_ITEM_INDEX}
          countryLabelFormatter={COUNTRY_LABEL_FORMATTER}
          flags={FLAGS}
          noMatchesText={NO_MATCHES_TEXT}
          maxHeight={MAX_HEIGHT}
          onListItemClick={ON_LIST_ITEM_CLICK}
        />
      )
      .toJSON();

    expect(tree).toMatchSnapshot();

  });

  it('should render correctly with custom no matches text', () => {

    const tree = renderer
      .create(
        <OverlayContent
          bsPrefix={BS_PREFIX}
          list={LIST}
          activeListItemIndex={ACTIVE_LIST_ITEM_INDEX}
          countryLabelFormatter={COUNTRY_LABEL_FORMATTER}
          flags={FLAGS}
          noMatchesText='custom no matches text'
          maxHeight={MAX_HEIGHT}
          onListItemClick={ON_LIST_ITEM_CLICK}
        />
      )
      .toJSON();

    expect(tree).toMatchSnapshot();

  });

});
