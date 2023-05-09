# Live Stock Price

[![npm version](https://badge.fury.io/js/live-stock-price.svg)](https://badge.fury.io/js/live-stock-price)
[![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)](https://github.com/tpatel29/live-stock-price/blob/main/LICENSE)

Live Stock Price is an NPM package that provides live stock data prices for a given symbol. It fetches the stock price from Yahoo Finance using web scraping techniques.

## Installation

```bash
npm install live-stock-price
```



## Usage
```js
const liveStockPrice = require('live-stock-price');

liveStockPrice('AAPL')
    .then((price) => {
        console.log('Stock price:', price);
    })
    .catch((error) => {
        console.error('Error:', error);
    });
```

Replace 'AAPL' with the desired stock symbol. The liveStockPrice function returns a promise that resolves to the live stock price.


## License

This project is licensed under the MIT License - see the [MIT License](https://github.com/tpatel29/live-stock-price/blob/main/LICENSE) file for details.
