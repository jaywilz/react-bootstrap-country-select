# React Bootstrap Country Select

A country select component with flag icons for React Bootstrap.

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
 - Autosuggest: a list of matching countries is displayed text is entered in input;
 - Country data is provided;
 - Specific countries can be excluded or additional countries can be added;
 - Country flag icons;
 - onChange and onTextChange callbacks; 
 - Custom sort and country list formatter functions can be provided;
 - Aligns horizontally with Bootstrap form controls;
 - Bootstrap small (`sm`) and large (`lg`) sizes are supported;

## Options (as React props)

| Property | Type | Default | Description |
| --- | --- | --- | --- |
| `value` | `object` \| `string` | | The current value: a country object or ID |
| `onChange` | `function` | | A callback fired when a country is selected. |
| `onTextChange` | `function` | | A callback fired when text in. |
| `countries` | `array` | | An array of country objects used to populate the country list. Provide this if you'd like to use your own countries data. |
| `exclusions` | `array` | | An array of country IDs that defines the countries to be excluded from the country list. |
| `additions` | `array` | | Additional countries in the same format as `countries`. |
| `valueAs` | `object` \| `id` | `object` | Defines if `value` is an object or an ID. |
| `flags` | `boolean` | `true` | Flags are displayed when `true`. |
| `flush` | `boolean` | `true` | When `true` the selected country flag appears in the input. When `false` it is rendered using [`<InputGroup.Text/>`](https://react-bootstrap.netlify.app/components/input-group/). |
| `disabled` | `boolean` | `false` | Disables the country select. |
| `placeholder` | `string` | `"Type or select country..."` | Placeholder text displayed in empty input. |
| `noMatchesText` | `string` | `"No matches"` | Placeholder text displayed in empty input. |
| `size` | `'sm'` \| `'lg'` | | Input size variants, for compatibility with other Bootstrap form components. |
| `listMaxHeight` | `number` | | Maximum pixel height of the list overlay. |
| `sort` | `function` | | A custom sort function that determines the order of the country list. |
| `matchNameFromStart` | `boolean` | `true` | If true country names are matched against inputted text from the string start. |
| `matchAbbreviations` | `boolean` | `false` | If true alpha2, alpha3 and IOC abbreviations are used in addition to countries names when matching inputted text. |
| `countryLabelFormatter` | `function` | | A custom country list item formatter. |
| `throwInvalidValueError` | `boolean` | `false` | If true an error is thrown if the provided value does match a country. |
| `formControlProps` | `object` | | Properties applied to the input `<FormControl/>`. |
| `overlayProps` | `object` | | Properties applied to the `<div>` element. |
| `bsPrefix` | `string` | `'country-select'` | Change the underlying component CSS base class name and modifier class names prefix. **This is an escape hatch** for working with heavily customized bootstrap css. |

## License

Copyright (c) 2020 Jason Wilson

[MIT License](./LICENSE)
