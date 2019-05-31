import axios from 'axios'
import {
  CHANGE_LOCATION,
  CHANGE_START_DATE,
  CHANGE_START_MINDATE,
  CHANGE_END_DATE,
  CHANGE_END_MINDATE,
  CHANGE_TRIP_NAME,
  ADD_NEW_CHECKPOINT,
  RESET_FORM,
  CREATE_ROADMAP,
  FETCH_WEATHER_BEGIN,
  FETCH_WEATHER_ERROR,
  FETCH_WEATHER_SUCCESS
} from './types'








export const changeLocation = (location) => ({
  type: CHANGE_LOCATION,
  payload: { ...location }
})

export const changeStartDate = (date, locale) => ({
  type: CHANGE_START_DATE,
  payload: { date, locale }
})

export const changeEndDate = (date, locale) => ({
  type: CHANGE_END_DATE,
  payload: { date, locale }
})

export const changeStartMinDate = (date) => ({
  type: CHANGE_START_MINDATE,
  payload: date
})

export const changeEndMinDate = (date) => ({
  type: CHANGE_END_MINDATE,
  payload: date
})











export const addNewCheckpoint = () =>
  (dispatch, getState) => {
    const location = getState().form.location
    const start = getState().form.startLocale
    const end = getState().form.endLocale

    dispatch({
      type: ADD_NEW_CHECKPOINT,
      payload: {
        location: { ...location },
        startDate: start,
        endDate: end
      }
    })

    /*reset form and passing the end date of the last checkpoint to avoid overlapping dates between checkpoints*/
    dispatch({
      type: RESET_FORM,
      payload: getState().form.end
    })
  }

export const changeTripName = (name) => ({
  type: CHANGE_TRIP_NAME,
  payload: name
})






// util function for roadmap creation, parsing locale date string to DarkSky format
const parseLocaleDate = (date) => {
  const dateArray = date.split('/')
  const [ day, month, year ] = dateArray
  return `${year}-${month}-${day}T00:00:00`
}




export const createRoadmap = () =>
  (dispatch, getState) => {
    const checkpoints = getState().trip.checkpoints
    let roadmap = []

    checkpoints.map(cp => {
      const location = cp.location
      const start = parseLocaleDate(cp.startDate)
      const end = parseLocaleDate(cp.endDate)
      const startTs = Date.parse(start)
      const endTs = Date.parse(end)

      let diff
      let forLoopStart
      if (startTs === endTs) {
        diff = 1
        forLoopStart = 1
      } else {
        diff = Math.round(Math.abs((startTs - endTs) / 86400000))
        forLoopStart = 0
      }

      let stamp = startTs
      for (let i = forLoopStart; i <= diff; i++) {
        roadmap.push({
          location: { ...location },
          timestamp: stamp,
          date: parseLocaleDate(new Date(stamp).toLocaleDateString())
        })
        stamp += 86400000
      }
    })

    dispatch({
      type: CREATE_ROADMAP,
      payload: roadmap
    })
  }


// FETCH WEATHER

export const fetchWeatherBegin = () => ({
  type: FETCH_WEATHER_BEGIN
})

export const fetchWeatherSuccess = ([...data]) => ({
  type: FETCH_WEATHER_SUCCESS,
  payload: [...data]
})

export const fetchWeatherError = (error) => ({
  type: FETCH_WEATHER_ERROR,
  payload: error.message
})

export const fetchWeather = () => {
  return (dispatch, getState) => {
    dispatch(fetchWeatherBegin())

    const roadmap = getState().weather.roadmap

    // return a promise for every element in the array
    const places = roadmap.map(place => {
      const lat = place.location.latlng.lat
      const lng = place.location.latlng.lng
      const date = place.date
      // const unixStamp = parseInt((new Date(place.timestamp) / 1000).toFixed(0))

      return axios.get(`/api/${lat}/${lng}/${date}`)
    })

    // wait for all the promises to resolve
    Promise.all([...places])
      .then(([...placesRes]) => {
        // isolate the data inside all the responses
        let data = [...placesRes].map(res => res.data)
        dispatch(fetchWeatherSuccess([...data]))
      })
      .catch(error => dispatch(fetchWeatherError(error)))
  }
}