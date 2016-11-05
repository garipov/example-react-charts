import _ from 'lodash';

import server from './server';

export default function getSymbols() {
  return server('latest').then(data=> _.keys(data.rates));
}
