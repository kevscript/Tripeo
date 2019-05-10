import {
  CHANGE_LOCATION,
  CHANGE_START_DATE,
  CHANGE_START_MINDATE,
  CHANGE_END_DATE,
  CHANGE_END_MINDATE,
  RESET_FORM
} from '../actions/types'

const initialState = {
  location: {},
  from: '',
  startMin: new Date(),
  to: '',
  endMin: new Date()
}

export default (state = initialState, action) => {

  switch (action.type) {

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
        from: action.payload
      }

    case CHANGE_END_DATE:
      return {
        ...state,
        to: action.payload
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

    default:
      return state
  }
}