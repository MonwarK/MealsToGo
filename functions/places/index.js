const { mocks, addMockImages } = require("./mock");
const url = require("url");

module.exports.placesRequest = (req, res) => {
  const { location } = url.parse(req.url, true).query;
  const data = mocks[location];
  data.results = data.results.map(addMockImages);
  res.send(data);
};
