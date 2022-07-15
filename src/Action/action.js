import axios from 'axios'
import * as action from './types'

export const profileData = data => ({
    type: action.PROFILE_DATA,
    payload: data
})

export const viewProfile = data => ({
    type: action.VIEW_PROFILE,
    payload: data
})

export const fetchData = data => {
    return(dispatch)=>{
        axios.get('https://jsonplaceholder.typicode.com/users')
        .then(response => {
            const user = response.data
            dispatch(profileData(user))
        })
    } 
}
