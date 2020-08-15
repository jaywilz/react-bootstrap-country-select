import React from 'react';
import renderer from 'react-test-renderer'

import CountrySelect from '../../src/CountrySelect/index.js';

describe('CountrySelect', () => {

  it('should render correctly without props', () => {

    const tree = renderer
      .create(
        <CountrySelect
        />
      )
      .toJSON();

    expect(tree).toMatchSnapshot();

  });

});
