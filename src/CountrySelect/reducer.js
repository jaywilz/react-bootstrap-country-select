import { filter } from './filter-and-sort';

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

export const INITIAL_STATE = {
  focused: false,
  filterOptions: null,
  countries: [],
  inputText: '',
  list: [],
  activeListItemIndex: -1,
  activeCountry: null,
};

const mount = (state, { filterOptions, countries }) => ({
  ...state,
  filterOptions,
  countries,
  list: [ ...countries ],
});

const focus = state => ({
  ...state,
  focused: true,
});

const blur = state => ({
  ...state,
  focused: false,
});

const textChange = (state, { inputText }) => {

  const {
    filterOptions: {
      matchNameFromStart,
      matchAbbreviations,
    },
    countries,
    list,
    activeListItemIndex,
  } = state;

  const currentActiveCountry = list[activeListItemIndex];

  const countryFilter = filter(matchNameFromStart, matchAbbreviations)(inputText);

  const updatedList = [ ...countries.filter(countryFilter) ];

  let newActiveCountryIndex = -1;

  if (updatedList.length === 1) {

    newActiveCountryIndex = 0;

  } else if (currentActiveCountry) {

    const index = updatedList.findIndex(country => country.id === currentActiveCountry.id);

    newActiveCountryIndex = Number.isFinite(index) ? index : -1;

  }

  return {
    ...state,
    inputText,
    list: updatedList,
    activeListItemIndex: newActiveCountryIndex,
  };

};

const activeListItemChange = (state, { activeListItemIndex }) => ({
  ...state,
  activeListItemIndex,
});

const textCompletion = state => {

  const {
    inputText,
    list,
    activeListItemIndex,
  } = state;

  const activeCountry = list[activeListItemIndex];

  if (activeCountry && inputText.length < activeCountry.name.length) {

    const regex = new RegExp(`^(.{${inputText.length},${inputText.length}}\\s?[^\\s]+)`, 'i');

    const updatedInputText = activeCountry.name.match(regex)[1];

    return textChange(state, { inputText: updatedInputText });

  } else {

    return state;

  }

};

const countrySelect = (state, { selectedCountry }) => ({
  ...state,
  inputText: selectedCountry.name,
  list: [],
  activeListItemIndex: -1,
});

const clear = state => ({
  ...state,
  inputText: '',
  list: [ ...state.countries ],
  activeListItemIndex: -1,
});

const reducer = (state, action) => {
  switch (action.type) {
    case MOUNT: return mount(state, action);
    case FOCUS: return focus(state);
    case BLUR: return blur(state);
    case TEXT_CHANGE: return textChange(state, action);
    case ACTIVE_LIST_ITEM_CHANGE: return activeListItemChange(state, action);
    case TEXT_COMPLETION: return textCompletion(state, action);
    case COUNTRY_SELECT: return countrySelect(state, action);
    case CLEAR: return clear(state);
    default: throw new Error(`No such reducer action: ${action.type}`);
  }
};

export default reducer;
