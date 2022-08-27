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
import { IAction, IActionInit, IActionTextChange, IActionActiveListItemChange } from './reducer';

export const init = (dispatch: React.Dispatch<IActionInit>) => (combinedCountries: ICountry[]) => dispatch({
  type: INIT,
  combinedCountries,
});

export const focus = (dispatch: React.Dispatch<IAction>) => () => dispatch({
  type: FOCUS,
});

export const blur = (dispatch: React.Dispatch<IAction>) => () => dispatch({
  type: BLUR,
});

export const textChange = (dispatch: React.Dispatch<IActionTextChange>) => (
  inputText: string,
  list: ICountry[],
  activeListItemIndex: number,
) => dispatch({
  type: TEXT_CHANGE,
  inputText,
  list,
  activeListItemIndex,
});

export const activeListItemChange = (dispatch: React.Dispatch<IActionActiveListItemChange>) => (
  activeListItemIndex: number,
) => dispatch({
  type: ACTIVE_LIST_ITEM_CHANGE,
  activeListItemIndex,
});

export const countrySelect = (dispatch: React.Dispatch<IAction>) => () => dispatch({
  type: COUNTRY_SELECT,
});

export const clear = (dispatch: React.Dispatch<IAction>) => () => dispatch({
  type: CLEAR,
});
