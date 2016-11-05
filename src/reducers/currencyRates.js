import {
  GET_CURRENCY_RATES,
  GET_CURRENCY_RATES_COMPLETE,
  GET_CURRENCY_RATES_FAIL
} from '../constants/ActionTypes';

export default function currencyRates(state = {values: []}, {type, payload, error}) {
  switch (type) {
    case GET_CURRENCY_RATES:
      return {
        loading: true,
        values: []
      };
    case GET_CURRENCY_RATES_COMPLETE:
      return {
        values: payload.values
      };
    case GET_CURRENCY_RATES_FAIL:
      return {
        error: payload.values
      };
    default:
      return state;
  }
}
