import {CHANGE_SYMBOL} from '../constants/ActionTypes';

export default function currentSymbol(state = null, {type, payload}) {
  switch (type) {
    case CHANGE_SYMBOL:
      return payload.value;
    default:
      return state;
  }
}
