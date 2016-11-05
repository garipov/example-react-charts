import React, {Component, PropTypes} from 'react';

export default class SelectSymbol extends Component {
  onSelect(e) {
    const {value} = e.target;
    this.props.actions.changeSymbol(value);
  }

  render() {
    const {props} = this;
    const {value, items} = props;

    return (
      <label>
        Currency symbol:&nbsp;
        <select value={value} onChange={this.onSelect.bind(this)}>
          {items.map(symbol=> (
            <option key={symbol} value={symbol}>{symbol}</option>
          ))}
        </select>
      </label>
    );
  }
}

SelectSymbol.propTypes = {
  value: PropTypes.string,
  items: PropTypes.array,
  actions: PropTypes.object.isRequired
};
