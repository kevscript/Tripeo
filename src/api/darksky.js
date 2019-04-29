import axios from 'axios'

export default axios.create({
  baseURL: `https://api.darksky.net/forecast/${process.env.REACT_APP_API_KEY}/`
})