import {
  INIT,
  FOCUS,
  BLUR,
  TEXT_CHANGE,
  ACTIVE_LIST_ITEM_CHANGE,
  COUNTRY_SELECT,
  CLEAR,
} from './constants';

import ICountry from '../CountrySelect/ICountry';

export interface IReducerState {
  focused: boolean;
  filterOptions: any;
  combinedCountries: ICountry[];
  inputText: string;
  list: ICountry[];
  activeListItemIndex: number;
}

export interface IAction {
  type: string;
}

export interface IActionInit extends IAction {
  combinedCountries: ICountry[];
}

export interface IActionTextChange extends IAction {
  inputText: string;
  list: ICountry[];
  activeListItemIndex: number;
}

export interface IActionActiveListItemChange extends IAction {
  activeListItemIndex: number;
}

export const INITIAL_STATE: IReducerState = {
  focused: false,
  filterOptions: null,
  combinedCountries: [],
  inputText: '',
  list: [],
  activeListItemIndex: -1,
};

const init = (state: IReducerState, {
  combinedCountries
}: { combinedCountries: ICountry[]; }): IReducerState => ({
  ...state,
  combinedCountries,
  list: [ ...combinedCountries ],
});

const focus = (state: IReducerState): IReducerState => ({
  ...state,
  focused: true,
});

const blur = (state: IReducerState): IReducerState => ({
  ...state,
  focused: false,
});

const textChange = (state: IReducerState, {
  inputText,
  list,
  activeListItemIndex,
}: { inputText: string; list: ICountry[]; activeListItemIndex: number; }): IReducerState => {

  return {
    ...state,
    inputText,
    list,
    activeListItemIndex,
  };

};

const activeListItemChange = (state: IReducerState, {
  activeListItemIndex,
}: { activeListItemIndex: number; }): IReducerState => ({
  ...state,
  activeListItemIndex,
});

const countrySelect = (state: IReducerState) => ({
  ...state,
  inputText: '',
  list: [ ...state.combinedCountries ],
  activeListItemIndex: -1,
});

const clear = (state: IReducerState) => ({
  ...state,
  inputText: '',
  list: [ ...state.combinedCountries ],
  activeListItemIndex: -1,
});

const reducer = (state: IReducerState, action: IAction): IReducerState => {
  switch (action.type) {
    case INIT: return init(state, action as IActionInit);
    case FOCUS: return focus(state);
    case BLUR: return blur(state);
    case TEXT_CHANGE: return textChange(state, action as IActionTextChange);
    case ACTIVE_LIST_ITEM_CHANGE: return activeListItemChange(state, action as IActionActiveListItemChange);
    case COUNTRY_SELECT: return countrySelect(state);
    case CLEAR: return clear(state);
    default: throw new Error(`No such reducer action: ${action.type}`);
  }
};

export default reducer;
