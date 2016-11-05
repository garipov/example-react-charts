import _ from 'lodash';
import moment from 'moment';
import React, {Component, PropTypes} from 'react';
import {Line} from 'react-chartjs-2';

const options = {
  legend: {display: false},
  maintainAspectRatio: false
};

export default class Chart extends Component {
  getChartData(values) {
    return {
      labels: values.map(({date})=> moment(date).format('ddd')),
      datasets: [{
        label: 'Currency',
        data: _.map(values, 'value')
      }]
    };
  }

  render() {
    const {props} = this;
    const {values} = props;

    return (
      <Line data={this.getChartData(values)} options={options}/>
    );
  }
}

Chart.propTypes = {
  symbol: PropTypes.string,
  values: PropTypes.array
};
