import React from 'react';
import ReactDOM from 'react-dom';
import './styles/main.scss';

import {configureStore} from './store/configureStore';
import {Root} from './containers/Root';

require('es6-promise').polyfill();
require('isomorphic-fetch');

const store = configureStore();

ReactDOM.render(
  <Root store={store}/>,
  document.getElementById('root')
);
