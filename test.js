const scraperWeb = require('./index');

scraperWeb('AAPL')
  .then((price) => {
    console.log('Stock price:', price);
  })
  .catch((error) => {
    console.error('Error:', error);
  });

scraperWeb('!@#')
  .then((price) => {
    console.log('Stock price:', price);
  })
  .catch((error) => {
    console.error('Error:', error);
  });
