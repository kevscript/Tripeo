import { combineReducers } from 'redux'
import formReducer from './formReducer'
import tripReducer from './tripReducer'
import weatherReducer from './weatherReducer'

export default combineReducers({
  form: formReducer,
  trip: tripReducer,
  weather: weatherReducer
})