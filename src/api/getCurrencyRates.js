import moment from 'moment';

import server from './server';

function get(date, symbol) {
  return server(`${date}?symbols=${symbol}`)
    .then(data=> {
      if (data.date !== date) {
        return null;
      }

      return data.rates[symbol];
    });
}

export default function (symbol) {
  const dataset = [];

  // it's very bad practice, but
  // I did not want to spend a lot of time searching for the any public api
  for (let i = 0, _date = moment(); i <= 7; i++, _date.add(-1, 'day')) {
    dataset.push((function (date) {
      return get(moment(date).format('YYYY-MM-DD'), symbol).then(value=> {
        return {
          date,
          value
        };
      });
    })(_date.toDate()));
  }

  return Promise.all(dataset).then(dataset=> {
    return dataset.sort(function ({date: date1}, {date: date2}) {
      return date1 - date2;
    });
  });
}
