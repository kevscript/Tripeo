import {
  CHANGE_TRIP_NAME,
  ADD_NEW_CHECKPOINT,
  DELETE_CHECKPOINT,
  RESET_ALL,
  ADD_CP_TO_ROADMAP,
  REMOVE_CP_FROM_ROADMAP
} from '../actions/types'

const initialState = {
  name: '',
  checkpoints: [],
  roadmap: []
}

export default (state = initialState, action) => {

  switch (action.type) {

    case ADD_CP_TO_ROADMAP:
      console.log('add cp to roadmap:', [...state.roadmap, ...action.payload ])
      return {
        ...state,
        roadmap: [...state.roadmap, ...action.payload]
      }
    
    case REMOVE_CP_FROM_ROADMAP:
      console.log('remove cp from roadmap:', [...action.payload])
      return {
        ...state,
        roadmap: [...action.payload]
      }

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
            endDate: action.payload.endDate,
            start: action.payload.start,
            end: action.payload.end,
            id: action.payload.id
          }
        ]
      }

    case DELETE_CHECKPOINT:
      return {
        ...state,
        checkpoints: [...action.payload]
      }

    case RESET_ALL:
      return initialState

    default:
      return state
  }

}