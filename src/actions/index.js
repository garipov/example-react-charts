import getApiCurrencyRates from '../api/getCurrencyRates';
import getApiSymbols from '../api/getSymbols';

import * as ACTIONS_TYPES from '../constants/ActionTypes';

export function changeSymbol(value) {
  return {
    type: ACTIONS_TYPES.CHANGE_SYMBOL,
    payload: {value}
  };
}

export function getCurrencyRates(symbol) {
  return dispatch=> {
    dispatch({type: ACTIONS_TYPES.GET_CURRENCY_RATES});

    return getApiCurrencyRates(symbol).then(values=> dispatch({
        type: ACTIONS_TYPES.GET_CURRENCY_RATES_COMPLETE,
        payload: {values}
      }), error=> dispatch({
        type: ACTIONS_TYPES.GET_CURRENCY_RATES_FAIL,
        error
      })
    );
  };
}

export function getSymbols(symbol) {
  return dispatch=> {
    dispatch({type: ACTIONS_TYPES.GET_SYMBOLS});

    return getApiSymbols(symbol).then(values=> dispatch({
        type: ACTIONS_TYPES.GET_SYMBOLS_COMPLETE,
        payload: {values}
      }), error=> dispatch({
        type: ACTIONS_TYPES.GET_SYMBOLS_FAIL,
        error
      })
    );
  };
}

