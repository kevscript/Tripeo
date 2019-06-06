import {
  CHANGE_LOCATION,
  CHANGE_START_DATE,
  CHANGE_START_MINDATE,
  CHANGE_END_DATE,
  CHANGE_END_MINDATE,
  RESET_FORM,
  RESET_ALL
} from '../actions/types'

const initialState = {
  location: '',
  start: '',
  startMin: new Date(),
  startLocale: '',
  end: '',
  endMin: new Date(),
  endLocale: ''
}

export default (state = initialState, action) => {

  switch (action.type) {

    // reset form and setting the minimum date of the start date input to the end date of the last checkpoint 
    // to avoid overlapping dates between checkpoints
    case RESET_FORM:
      return {
        ...initialState,
        startMin: action.payload
      }
    
    case CHANGE_LOCATION:
      return {
        ...state,
        location: { ...action.payload }
      }

    case CHANGE_START_DATE:
      return {
        ...state,
        start: action.payload.date,
        startLocale: action.payload.locale
      }

    case CHANGE_END_DATE:
      return {
        ...state,
        end: action.payload.date,
        endLocale: action.payload.locale
      }

    case CHANGE_START_MINDATE:
      return {
        ...state,
        startMin: action.payload
      }

    case CHANGE_END_MINDATE:
      return {
        ...state,
        endMin: action.payload
      }

    case RESET_ALL:
      return initialState

    default:
      return state
  }
}