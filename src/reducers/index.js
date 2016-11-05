import {combineReducers} from 'redux';
import currentSymbol from './currentSymbol';
import currencyRates from './currencyRates';
import symbols from './symbols';

const rootReducer = combineReducers({
  currentSymbol,
  currencyRates,
  symbols,
});

export default rootReducer;
