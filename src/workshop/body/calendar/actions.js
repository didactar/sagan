import {BASE_URL} from '../../../constants'

export const REQUEST_EVENTS = 'REQUEST_EVENTS'
export const RECEIVE_EVENTS = 'RECEIVE_EVENTS'
export const EXPAND_EVENT = 'EXPAND_EVENT'


const workshopEvents = (workshop) =>
    BASE_URL + 'workshops/' + workshop + '/events'


export const requestEvents = () => ({
    type: REQUEST_EVENTS
})


export const receiveEvents = json => ({
    type: RECEIVE_EVENTS,
    items: json.data
})


export const expandEvent = event => ({
    type: EXPAND_EVENT,
    event
})


export const fetchEvents = workshop => dispatch => {
    dispatch(requestEvents())
    return fetch(workshopEvents(workshop))
        .then(response => response.json())
        .then(json => dispatch(receiveEvents(json)))
}
