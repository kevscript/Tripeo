import axios from 'axios'
import {
  CHANGE_LOCATION,
  CHANGE_START_DATE,
  CHANGE_START_MINDATE,
  CHANGE_END_DATE,
  CHANGE_END_MINDATE,
  CHANGE_TRIP_NAME,
  ADD_NEW_CHECKPOINT,
  DELETE_CHECKPOINT,
  RESET_FORM,
  OPEN_FORM,
  FETCH_WEATHER_BEGIN,
  FETCH_WEATHER_ERROR,
  FETCH_WEATHER_SUCCESS,
  RESET_ALL,
  CLEAR_LOCATION,
  ADD_CP_TO_ROADMAP,
  REMOVE_CP_FROM_ROADMAP
} from './types'
import parseLocaleDate from '../utils/parseLocaleDate'

// reset state of app
export const resetAll = () => ({
  type: RESET_ALL
})

// open form
export const openForm = () => ({
  type: OPEN_FORM
})

// receives location Object from Algolia Places Api selected by user
// changes Location input of TripForm
export const changeLocation = (location) => ({
  type: CHANGE_LOCATION,
  payload: { ...location }
})

export const clearLocation = () => ({
  type: CLEAR_LOCATION
})

// receives date Object from React-Datepicker 
// and locale which is a string that's a formated version of date
// changes the start date of TripForm
export const changeStartDate = (date, locale) => ({
  type: CHANGE_START_DATE,
  payload: { date, locale }
})

// receives date Object from React-Datepicker 
// and locale which is a string that's a formated version of date
// changes the end date of TripForm
export const changeEndDate = (date, locale) => ({
  type: CHANGE_END_DATE,
  payload: { date, locale }
})

// receives a date Object that changes the minimum date of the Date Picker
export const changeStartMinDate = (date) => ({
  type: CHANGE_START_MINDATE,
  payload: date
})

// receives a date Object that changes the minimum date of the Date Picker
// setted to the same as startMinDate so you can't pick a date before the start date
export const changeEndMinDate = (date) => ({
  type: CHANGE_END_MINDATE,
  payload: date
})

// receives a string with trip name from Form
export const changeTripName = (name) => ({
  type: CHANGE_TRIP_NAME,
  payload: name
})




// adds a checkpoint to the list
export const addNewCheckpoint = () =>
  (dispatch, getState) => {
    // gets location and date range of Form
    const form = getState().form
    const { location, start, startLocale, end, endLocale } = form
    const cpId = `${location.name.trim().toLowerCase()}-${startLocale}`

    dispatch({
      type: ADD_NEW_CHECKPOINT,
      payload: {
        location: { ...location },
        startDate: startLocale,
        endDate: endLocale,
        start: start,
        end: end,
        id: cpId
      }
    })

    const checkpointsToAdd = []
    // creates timestamps from dates
    const startTs = Date.parse(parseLocaleDate(startLocale))
    const endTs = Date.parse(parseLocaleDate(endLocale))

    // numberOfDays represents the number of days between start and end dates (acts as the condition of the forLoop and sets the iterative value)
    let numberOfDays
    // forLoopStart is an integer that represents the start of the loop (either 0 or 1)
    let forLoopStart
    // if the start and end dates are the same (1 day checkpoint)
    if (startTs === endTs) {
      // sets loop start and loop iteration limit to same value so it runs only once
      numberOfDays = 1
      forLoopStart = 1
    } else {
      // 86400000 represents 1 day in timestamps units
      numberOfDays = Math.round(Math.abs((startTs - endTs) / 86400000))
      forLoopStart = 0
    }

    let stamp = startTs
    // for each day of difference, push a checkpoint to the roadmap
    for (let i = forLoopStart; i <= numberOfDays; i++) {
      checkpointsToAdd.push({
        location: { ...location },
        timestamp: stamp,
        date: parseLocaleDate(new Date(stamp).toLocaleDateString()),
        checkpoint: cpId
      })
      // adds 1 day to the timestamp for the next iteration (1 iteration / day)
      stamp += 86400000
    }

    dispatch({
      type: ADD_CP_TO_ROADMAP,
      payload: [...checkpointsToAdd]
    })

    // reset form and passing the end date of the last checkpoint from the Form input to avoid overlapping dates between checkpoints
    dispatch({
      type: RESET_FORM,
      payload: end
    })
  }


// deletes a specific checkpoint from the list
export const deleteCheckpoint = (id) =>
  (dispatch, getState) => {
    // get the checkpoints array
    const checkpoints = [...getState().trip.checkpoints]
    const roadmap = [...getState().trip.roadmap]

    // filter the specific checkpoint out
    const newCheckpoints = checkpoints.filter(cp => cp.id !== id)
    const newRoadmap = roadmap.filter(el => el.checkpoint !== id)

    dispatch({
      type: DELETE_CHECKPOINT,
      payload: newCheckpoints
    })

    dispatch({
      type: REMOVE_CP_FROM_ROADMAP,
      payload: newRoadmap
    })

    // get the new checkpoints after dispatch
    const updatedCheckpoints = [...getState().trip.checkpoints]
    // minDate represents the minimum Date from which the Date picker can start
    let minDate
    // if there is checkpoints in the array
    if (updatedCheckpoints.length > 0) {
      // set minDate to the end Date object of the last checkpoint in the array
      minDate = updatedCheckpoints[updatedCheckpoints.length - 1].end
    } else {
      // if there is no checkpoints in the array, set it to now
      minDate = new Date()
    }

    // reset form and passing a minimum Date for the date picker, to avoid overlapping dates between checkpoints
    dispatch({
      type: RESET_FORM,
      payload: minDate
    })
  }


// FETCH WEATHER
export const fetchWeatherBegin = () => ({
  type: FETCH_WEATHER_BEGIN
})

// receives an array of objects, trimmed weather data from darkSky Api
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

    const roadmap = getState().trip.roadmap

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