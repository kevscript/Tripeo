import {
  CHANGE_LOCATION,
  CHANGE_START_DATE,
  CHANGE_END_DATE
} from '../actions/types'

export default (state = {}, action) => {

  switch (action.type) {

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