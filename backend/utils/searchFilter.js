const elasticsearch = require('elasticsearch');

const client = new elasticsearch.Client({
  host: 'localhost:9200',
  log: 'trace'
});

const search = async (index, body) => {
  return await client.search({index: index, body: body});
};

const filterResults = (results, criteria) => {
  return results.filter(result => {
    for (let key in criteria) {
      if (result[key] !== criteria[key]) {
        return false;
      }
    }
    return true;
  });
};

module.exports = {
  search,
  filterResults
};