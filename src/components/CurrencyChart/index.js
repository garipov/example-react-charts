import React, {Component, PropTypes} from 'react';

import Chart from './Chart';
import SelectSymbol from './SelectSymbol';

import styles from '../../styles/currencyChart.scss';

export default class CurrencyChart extends Component {
  componentDidMount() {
    this.props.actions.getSymbols();
  }

  componentWillReceiveProps({currentSymbol, symbols, actions}) {
    if (currentSymbol) {
      if (currentSymbol !== this.props.currentSymbol) {
        actions.getCurrencyRates(currentSymbol);
      }
    } else {
      if (symbols.values.length) {
        actions.changeSymbol(symbols.values[0]);
      }
    }
  }

  render() {
    const {props} = this;
    const {currentSymbol, currencyRates, symbols, actions} = props;

    if (symbols.loading) {
      return <span>Loading...</span>;
    }

    const chart = currencyRates.loading
      ? <span>Loading data...</span>
      : <Chart symbol={currentSymbol} values={currencyRates.values}/>;

    return (
      <div className={styles.currencyChart}>
        <div className={styles.selectSymbolContainer}>
          <SelectSymbol actions={actions} value={currentSymbol} items={symbols.values}/>
        </div>
        <div className={styles.chartContainer}>
          {chart}
        </div>
      </div>
    );
  }
}

CurrencyChart.propTypes = {
  currentSymbol: PropTypes.string,
  currencyRates: PropTypes.object.isRequired,
  symbols: PropTypes.object.isRequired,
  actions: PropTypes.object.isRequired
};
