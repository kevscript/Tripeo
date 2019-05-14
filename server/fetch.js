const api = require('./api')

function getWeather(lat, lng, time) {
  return api.dark.get(`/${lat},${lng},${time}`)
    .then(data => data)
    .catch(error => console.log(error))
}

module.exports = {
  getWeather
};