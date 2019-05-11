import {
  CHANGE_TRIP_NAME,
  ADD_NEW_CHECKPOINT
} from '../actions/types'

const initialState = {
  name: '',
  checkpoints: []
}

export default (state = initialState, action) => {

  switch (action.type) {

    case CHANGE_TRIP_NAME:
      return {
        ...state,
        name: action.payload
      }

    case ADD_NEW_CHECKPOINT:
      return {
        ...state,
        checkpoints: [
          ...state.checkpoints,
          {
            location: { ...action.payload.location },
            startDate: action.payload.startDate,
            endDate: action.payload.endDate
          }
        ]
      }

    default:
      return state
  }

}