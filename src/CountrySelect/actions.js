import {
  MOUNT,
  FOCUS,
  BLUR,
  TEXT_CHANGE,
  ACTIVE_LIST_ITEM_CHANGE,
  TEXT_COMPLETION,
  COUNTRY_SELECT,
  CLEAR,
} from './constants';

export const mount = dispatch => (filterOptions, countries) => dispatch({
  type: MOUNT,
  filterOptions,
  countries,
});

export const focus = dispatch => () => dispatch({
  type: FOCUS,
});

export const blur = dispatch => () => dispatch({
  type: BLUR,
});

export const textChange = dispatch => inputText => dispatch({
  type: TEXT_CHANGE,
  inputText,
});

export const activeListItemChange = dispatch => activeListItemIndex => dispatch({
  type: ACTIVE_LIST_ITEM_CHANGE,
  activeListItemIndex,
});

export const textCompletion = dispatch => () => dispatch({
  type: TEXT_COMPLETION,
});

export const countrySelect = dispatch => selectedCountry => dispatch({
  type: COUNTRY_SELECT,
  selectedCountry,
});

export const clear = dispatch => () => dispatch({
  type: CLEAR,
});
