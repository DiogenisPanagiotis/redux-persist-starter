import { ADD_PROJECT } from '../actions/types'

const initialState = {
    count: 0,
    projects: []
}

export default function incrementReducer(state = initialState, action) {
    switch (action.type) {
        case "INC":
            return {
                ...state,
                count: state.count + 1
            }
        case ADD_PROJECT:
            return {
                ...state,
                projects: [...state.projects, action.payload]
            }                   
        default:
            return state
    }
}