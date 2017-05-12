import {BASE_URL} from '../constants'

export const REQUEST_WORKSHOP = 'REQUEST_WORKSHOP'
export const RECEIVE_WORKSHOP = 'RECEIVE_WORKSHOP'
export const SHOW_HOME = 'SHOW_HOME'
export const SHOW_COMMUNITY = 'SHOW_COMMUNITY'
export const SHOW_RESOURCES = 'SHOW_RESOURCES'
export const SHOW_EVENT = 'SHOW_EVENT'


export const showHome = () => ({
    type: SHOW_HOME
})


export const showEvent = () => ({
    type: SHOW_EVENT
})


export const showResources = () => ({
    type: SHOW_RESOURCES
})


export const showCommunity = () => ({
    type: SHOW_COMMUNITY
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
