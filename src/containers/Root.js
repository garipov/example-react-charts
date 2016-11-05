import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {Provider, connect} from 'react-redux';

import * as Actions from '../actions/index';
import App from './App';

const ConnectedApp = connect(
  state=> ({state}),
  dispatch=> ({actions: bindActionCreators(Actions, dispatch)})
)(App);

export class Root extends Component {
  render() {
    const {store} = this.props;
    return (
      <Provider store={store}>
        <ConnectedApp />
      </Provider>
    );
  }
}
