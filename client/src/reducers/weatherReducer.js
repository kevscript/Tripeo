import {
  CREATE_ROADMAP,
  FETCH_WEATHER_BEGIN,
  FETCH_WEATHER_ERROR,
  FETCH_WEATHER_SUCCESS
} from '../actions/types'

const initialState = {
  loading: true,
  roadmap: '',
  forecasts: ''
}

export default (state = initialState, action) => {
  switch (action.type) {
    case CREATE_ROADMAP:
      return {
        ...state,
        roadmap: action.payload
      }

    case FETCH_WEATHER_BEGIN:
      return {
        ...state,
        loading: true
      }

    case FETCH_WEATHER_SUCCESS:
      return {
        ...state,
        loading: false,
        forecasts: [...action.payload]
      }

    case FETCH_WEATHER_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload
      }

    default:
      return state
  }
}