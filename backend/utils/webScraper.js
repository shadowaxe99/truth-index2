const axios = require('axios');
const cheerio = require('cheerio');

const scrapePublicStance = async (url) => {
  try {
    const response = await axios.get(url);
    const html = response.data;
    const $ = cheerio.load(html);
    let publicStanceData = [];

    // Assuming public stances are in paragraphs
    $('p').each((i, elem) => {
      publicStanceData.push({
        stance: $(elem).text(),
      });
    });

    return publicStanceData;
  } catch (error) {
    console.error(`Error in web scraping: ${error}`);
    return [];
  }
};

module.exports = {
  scrapePublicStance,
};