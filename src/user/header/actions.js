import {BASE_URL} from '../../constants'

export const REQUEST_USER = 'REQUEST_USER'
export const RECEIVE_USER = 'RECEIVE_USER'


const userDetail = username =>
    BASE_URL + 'users/' + username


export const requestUser = () => ({
    type: REQUEST_USER
})


export const receiveUser = json => ({
    type: RECEIVE_USER,
    user: json
})


export const fetchUser = username => dispatch => {
    dispatch(requestUser())
    return fetch(userDetail(username))
        .then(response => response.json())
        .then(json => dispatch(receiveUser(json)))
}
