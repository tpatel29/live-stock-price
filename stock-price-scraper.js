const axios = require('axios');
const cheerio = require('cheerio');

async function scraperWeb(symbol) {
  try {
    const response = await axios.get(`https://finance.yahoo.com/quote/${symbol}/`);
    const $ = cheerio.load(response.data);
    const priceElement = $("#quote-header-info")
      .find('fin-streamer[class="Fw(b) Fz(36px) Mb(-4px) D(ib)"]');
    const price = priceElement.text().trim();
    const index = price.indexOf(".");
    const formattedPrice =
      price.substring(0, index) + "." + price.substring(index + 1, index + 3);
    return formattedPrice;
  } catch (error) {
    throw error;
  }
}

module.exports = scraperWeb;
