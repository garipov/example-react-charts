import {
  GET_SYMBOLS,
  GET_SYMBOLS_COMPLETE,
  GET_SYMBOLS_FAIL
} from '../constants/ActionTypes';

export default function currencyRates(state = {values: []}, {type, payload, error}) {
  switch (type) {
    case GET_SYMBOLS:
      return {
        loading: true,
        values: []
      };
    case GET_SYMBOLS_COMPLETE:
      return {
        values: payload.values
      };
    case GET_SYMBOLS_FAIL:
      return {
        error: payload.values
      };
    default:
      return state;
  }
}
