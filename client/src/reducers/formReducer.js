import {
  CHANGE_LOCATION,
  CHANGE_START_DATE,
  CHANGE_END_DATE,
  RESET_FORM
} from '../actions/types'

const initialState = {
  location: {},
  from: '',
  to: ''
}

export default (state = initialState, action) => {

  switch (action.type) {

    case RESET_FORM:
      return initialState

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

    default:
      return state
  }
}