# React Bootstrap Country Select &nbsp; [![Tweet](https://img.shields.io/twitter/url/http/shields.io.svg?style=social)](https://twitter.com/intent/tweet?text=React%20Bootstrap%20country%20select%20with%20tooltips%20%28Bootstrap%204%29&url=https://github.com/jaywilz/react-bootstrap-country-select&hashtags=reactbootstrap,bootstrap,ux)

[![License: MIT](https://img.shields.io/github/license/jaywilz/react-bootstrap-country-select)](https://github.com/jaywilz/react-bootstrap-country-select/blob/master/LICENSE) [![NPM version](https://img.shields.io/npm/v/react-bootstrap-country-select)](https://www.npmjs.com/package/react-bootstrap-country-select) [![Required react version](https://img.shields.io/npm/dependency-version/react-bootstrap-country-select/peer/react)](https://github.com/jaywilz/react-bootstrap-country-select/blob/master/package.json) [![Issues](https://img.shields.io/github/issues/jaywilz/react-bootstrap-country-select)](https://github.com/jaywilz/react-bootstrap-country-select/issues) [![npm bundle size](https://img.shields.io/bundlephobia/minzip/react-bootstrap-country-select)](https://bundlephobia.com/result?p=react-bootstrap-country-select)


A country select component with flag icons for React Bootstrap.

Go to the [demos](https://jaywilz.github.io/react-bootstrap-country-select/) page to see it in action.

<img src="./screenshots/react-bootstrap-country-select-no-text.png?raw=true" alt="React Bootstrap Country Select screenshot showing country select component when focused" width="494">

<img src="./screenshots/react-bootstrap-country-select-search.png?raw=true" alt="React Bootstrap Country Select screenshot showing country select component with entered text and auto suggestions in dropdown below input" width="494">

<img src="./screenshots/react-bootstrap-country-select-selected-country.png?raw=true" alt="React Bootstrap Country Select screenshot showing selected country" width="494">

## Installation

    yarn add react-bootstrap-country-select

or

    npm install react-bootstrap-country-select

### Prerequisites

[React Bootstrap](https://github.com/react-bootstrap/react-bootstrap) must be installed and the [Bootstrap CSS](https://react-bootstrap.netlify.com/getting-started/introduction#stylesheets) imported (or included).

## Usage

In your `index.js` or similar:

```JavaScript
import 'bootstrap/dist/css/bootstrap.css'; // or include from a CDN
import 'react-bootstrap-country-select/dist/react-bootstrap-country-select.css';
```

Your component:

```JavaScript
import React, { useState } from 'react';
import CountrySelect from 'react-bootstrap-country-select';

const MyComponent = () => {

  const [ value, setValue ] = useState(null); 

  return (
    <CountrySelect
      value={value}
      onChange={setValue}
    />
  );

};
```

## Features

 - Compatible with React Bootstrap v1.0.0+ and Bootstrap 4;
 - Implemented using standard React Bootstrap components;
 - Autosuggest: a list of matching countries is displayed when the input text changes;
 - Country data is provided;
 - Specific countries can be excluded and additional countries added;
 - Country flag icons;
 - onChange and onTextChange callbacks;
 - Custom sort and country list formatter functions;
 - Bootstrap small (`sm`) and large (`lg`) sizes are supported
- Aligns horizontally with Bootstrap form controls;

## Options (as React props)

| Property | Type | Default | Description |
| --- | --- | --- | --- |
| `value` | `object` \| `string` | | The current value: a country object, country ID or null. See `valueAs`. |
| `onChange` | `function` | | A callback fired when a country is selected or unselected. The argument is the country object, country ID or null. |
| `onTextChange` | `function` | | A callback fired when the input text changes. The first argument is the text value and the second argument is the input's change event object. |
| `countries` | `array` | | An array of country objects used to populate the country list. Provide this if you'd like to use your own countries data. A country object has the properties: `id`, `name`, `flag`, `alpha2`, `alpha3` and `ioc`. |
| `exclusions` | `array` | | An array of country IDs that defines the countries to be excluded from the country list. |
| `additions` | `array` | | Additional countries in the same format as `countries`. |
| `valueAs` | `object` \| `id` | `object` | Determines if `value` is a country object or an ID string. |
| `flags` | `boolean` | `true` | Flags are displayed when `true` and not displayed when `false`. |
| `flush` | `boolean` | `true` | When `true` the selected country flag appears in the input. When `false` it is rendered using [`<InputGroup.Text/>`](https://react-bootstrap.netlify.app/components/input-group/). |
| `disabled` | `boolean` | `false` | Disables the country select. |
| `placeholder` | `string` | _"Type or select country..."_ | Placeholder text displayed in empty input. |
| `noMatchesText` | `string` | _"No matches"_ | The text displayed when no countries match the entered input text. |
| `size` | `'sm'` \| `'lg'` | | Input size variants, for compatibility with other Bootstrap form components. |
| `listMaxHeight` | `number` | | Maximum pixel height of the list overlay. |
| `sort` | `function` | | A custom sort function that determines the order of the country list. The function's two arguments country objects. |
| `matchNameFromStart` | `boolean` | `true` | If `true` autosuggest matches country names from the start of the string. |
| `matchAbbreviations` | `boolean` | `false` | If `true` autosuggest matches against alpha2, alpha3 and IOC abbreviations in addition to country names. |
| `countryLabelFormatter` | `function` | | A custom country list item formatter. The argument is a country object. |
| `throwInvalidValueError` | `boolean` | `false` | If `true` an error is thrown if the provided value does not match a country. |
<!-- | `closeOnSelect` | `boolean` | `true` | If `true` the list overlay will close when a country is selected. If `false` the list overlay will remain visible while the input is focused. | -->
| `formControlProps` | `object` | | Properties applied to the `<FormControl/>` input. |
| `overlayProps` | `object` | | Properties applied to the overlay `<div>` element that contains the country list. |
| `classPrefix` | `string` | `'country-select'` | Change the underlying component CSS base class name and modifier class names prefix. **This is an escape hatch** for working with heavily customized CSS. |

For further documentation and live examples visit the [website](https://jaywilz.github.io/react-bootstrap-country-select/).

If you have a usage query or feature request please [create an issue](https://github.com/jaywilz/react-bootstrap-country-select/issues/new).

## License

Copyright (c) 2020 Jason Wilson

[MIT License](./LICENSE)
