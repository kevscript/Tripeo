import {
  CREATE_ROADMAP
} from '../actions/types'

const initialState = {
  roadmap: ''
}

export default (state = initialState, action) => {
  switch (action.type) {
    case CREATE_ROADMAP:
      return {
        ...state,
        roadmap: action.payload
      }

    default:
      return state
  }
}