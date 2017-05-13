import {BASE_URL} from '../constants'

export const REQUEST_USER = 'REQUEST_USER'
export const RECEIVE_USER = 'RECEIVE_USER'
export const SHOW_WORKSHOPS = 'SHOW_WORKSHOPS'
export const SHOW_CALENDAR = 'SHOW_CALENDAR'
export const SHOW_ABOUT = 'SHOW_ABOUT'


export const showAbout = () => ({
    type: SHOW_ABOUT
})


export const showCalendar = () => ({
    type: SHOW_CALENDAR
})


export const showWorkshops = () => ({
    type: SHOW_WORKSHOPS
})


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
