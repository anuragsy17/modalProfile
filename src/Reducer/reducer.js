import * as actions from '../Action/types'

const initialState = {
    userData: [],
    showProfile: false,
    id: ''
}

export function reducer(state = initialState, action){
    switch(action.type){
        case actions.PROFILE_DATA:
            return {
                ...state,
                userData: action.payload
            }
        case actions.VIEW_PROFILE:
            return {
                ...state,
                showProfile: !state.showProfile,
                id: action.payload
            }
        default:
            return state
    }
}