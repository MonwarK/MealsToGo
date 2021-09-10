const { locations: locationsMock } = require("./GeocodeMock");
const url = require("url");

module.exports.geocodeRequest = (req, res) => {
  const { city } = url.parse(req.url, true).query;
  const locationMock = locationsMock[city.toLowerCase()];
  res.json(locationMock);
};
