import { combineReducers } from 'redux'
import formReducer from './formReducer'
import tripReducer from './tripReducer'

export default combineReducers({
  form: formReducer,
  trip: tripReducer
})