const axios = require('axios')
require('dotenv').config()

const dark = axios.create({
  baseURL: `https://api.darksky.net/forecast/${process.env.DARKSKY_API_KEY}`,
  params: {
    exclude: 'currently,flags',
    units: 'si'
  }
})

module.exports = {
  dark
}