import React, {Component, PropTypes} from 'react';

import CurrencyChart from '../components/CurrencyChart';

import styles from '../styles/app.scss';

export default class App extends Component {
  render() {
    const {state, actions} = this.props;
    const {currencyRates, currentSymbol, symbols} = state;

    return (
      <div className={styles.appContainer}>
        <CurrencyChart {...{currencyRates, currentSymbol, symbols, actions}}/>
      </div>
    );
  }
};

App.propTypes = {
  state: PropTypes.object.isRequired,
  actions: PropTypes.object.isRequired
};
