import {BASE_URL} from '../../constants'

export const REQUEST_USERS = 'REQUEST_USERS'
export const RECEIVE_USERS = 'RECEIVE_USERS'


const workshopUsers = (workshopSlug) =>
    BASE_URL + 'users'


export const requestUsers = () => ({
    type: REQUEST_USERS
})


export const receiveUsers = json => ({
    type: RECEIVE_USERS,
    users: json
})


export const fetchUsers = workshopSlug => dispatch => {
    dispatch(requestUsers())
    return fetch(workshopUsers(workshopSlug))
        .then(response => response.json())
        .then(json => dispatch(receiveUsers(json)))
}
