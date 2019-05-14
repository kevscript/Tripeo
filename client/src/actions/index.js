import {
  CHANGE_LOCATION,
  CHANGE_START_DATE,
  CHANGE_START_MINDATE,
  CHANGE_END_DATE,
  CHANGE_END_MINDATE,
  CHANGE_TRIP_NAME,
  ADD_NEW_CHECKPOINT,
  RESET_FORM,
  CREATE_ROADMAP
} from './types'

export const changeLocation = (location) => ({
  type: CHANGE_LOCATION,
  payload: { ...location }
})

export const changeStartDate = (date) => ({
  type: CHANGE_START_DATE,
  payload: date
})

export const changeEndDate = (date) => ({
  type: CHANGE_END_DATE,
  payload: date
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
    const start = getState().form.start
    const end = getState().form.end

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











export const createRoadmap = () =>
  (dispatch, getState) => {
    const checkpoints = getState().trip.checkpoints
    let roadmap = []

    checkpoints.map(cp => {
      let start = new Date(cp.startDate)
      let end = new Date(cp.endDate)
      let diff = Math.round(Math.abs((start.getTime() - end.getTime()) / 86400000))

      let place = {
        location: { ...cp.location },
        timestamps: []
      }

      let startStamp = start.getTime()
      for (let i = 0; i < diff; i++) {
        place.timestamps.push(startStamp)
        startStamp += 86400000
      }

      roadmap.push(place)

    })

    dispatch({
      type: CREATE_ROADMAP,
      payload: roadmap
    })
  }