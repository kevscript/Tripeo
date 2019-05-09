import {
  CHANGE_TRIP_NAME,
  CHANGE_LOCATION,
  CHANGE_START_DATE,
  CHANGE_END_DATE
} from './types'

export const changeTripName = (name) => ({
  type: CHANGE_TRIP_NAME,
  payload: name
})

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
