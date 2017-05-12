import {BASE_URL} from '../constants'

export const REQUEST_WORKSHOP = 'REQUEST_WORKSHOP'
export const RECEIVE_WORKSHOP = 'RECEIVE_WORKSHOP'
export const SHOW_COMMUNITY = 'SHOW_COMMUNITY'
export const SHOW_RESOURCES = 'SHOW_RESOURCES'
export const SHOW_CALENDAR = 'SHOW_CALENDAR'



export const showResources = () => ({
    type: SHOW_RESOURCES
})


export const showCommunity = () => ({
    type: SHOW_COMMUNITY
})


export const showCalendar = () => ({
    type: SHOW_CALENDAR
})


const workshopDetail = (workshop) =>
    BASE_URL + 'workshops/' + workshop


export const requestWorkshop = () => ({
    type: REQUEST_WORKSHOP
})


export const receiveWorkshop = json => ({
    type: RECEIVE_WORKSHOP,
    workshop: json
})


export const fetchWorkshop = workshop => dispatch => {
    dispatch(requestWorkshop())
    return fetch(workshopDetail(workshop))
        .then(response => response.json())
        .then(json => dispatch(receiveWorkshop(json)))
}
