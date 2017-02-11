import {BASE_URL} from '../../../constants'

export const REQUEST_EVENT = 'REQUEST_EVENT'
export const RECEIVE_EVENT = 'RECEIVE_EVENT'


const eventDetail = (eventSlug) =>
    BASE_URL + 'events/' + eventSlug


export const requestEvent = () => ({
    type: REQUEST_EVENT
})


export const receiveEvent = json => ({
    type: RECEIVE_EVENT,
    event: json
})


export const fetchEvent = eventSlug => dispatch => {
    dispatch(requestEvent())
    return fetch(eventDetail(eventSlug))
        .then(response => response.json())
        .then(json => dispatch(receiveEvent(json)))
}
