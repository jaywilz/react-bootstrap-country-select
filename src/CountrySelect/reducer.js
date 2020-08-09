import {
  INIT,
  FOCUS,
  BLUR,
  TEXT_CHANGE,
  ACTIVE_LIST_ITEM_CHANGE,
  COUNTRY_SELECT,
  CLEAR,
} from './constants';

export const INITIAL_STATE = {
  focused: false,
  filterOptions: null,
  combinedCountries: [],
  inputText: '',
  list: [],
  activeListItemIndex: -1,
};

const init = (state, { combinedCountries }) => ({
  ...state,
  combinedCountries,
  list: [ ...combinedCountries ],
});

const focus = state => ({
  ...state,
  focused: true,
});

const blur = state => ({
  ...state,
  focused: false,
});

const textChange = (state, { inputText, list, activeListItemIndex }) => {

  return {
    ...state,
    inputText,
    list,
    activeListItemIndex,
  };

};

const activeListItemChange = (state, { activeListItemIndex }) => ({
  ...state,
  activeListItemIndex,
});

const countrySelect = state => ({
  ...state,
  inputText: '',
  list: [ ...state.combinedCountries ],
  activeListItemIndex: -1,
});

const clear = state => ({
  ...state,
  inputText: '',
  list: [ ...state.combinedCountries ],
  activeListItemIndex: -1,
});

const reducer = (state, action) => {
  switch (action.type) {
    case INIT: return init(state, action);
    case FOCUS: return focus(state);
    case BLUR: return blur(state);
    case TEXT_CHANGE: return textChange(state, action);
    case ACTIVE_LIST_ITEM_CHANGE: return activeListItemChange(state, action);
    case COUNTRY_SELECT: return countrySelect(state, action);
    case CLEAR: return clear(state);
    default: throw new Error(`No such reducer action: ${action.type}`);
  }
};

export default reducer;
