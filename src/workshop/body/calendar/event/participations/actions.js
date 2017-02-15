import {BASE_URL} from '../../../../../constants'

export const REQUEST_PARTICIPATIONS = 'REQUEST_PARTICIPATIONS'
export const RECEIVE_PARTICIPATIONS = 'RECEIVE_PARTICIPATIONS'


const eventParticipations = (eventSlug) =>
    BASE_URL + 'events/' + eventSlug + '/participations'


export const requestParticipations = () => ({
    type: REQUEST_PARTICIPATIONS
})


export const receiveParticipations = json => ({
    type: RECEIVE_PARTICIPATIONS,
    participations: json
})


export const fetchParticipations = eventSlug => dispatch => {
    dispatch(requestParticipations())
    return fetch(eventParticipations(eventSlug))
        .then(response => response.json())
        .then(json => dispatch(receiveParticipations(json)))
}
