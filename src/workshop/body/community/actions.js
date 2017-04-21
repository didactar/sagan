import {BASE_URL} from '../../../../../constants'

export const REQUEST_COMMUNITY = 'REQUEST_COMMUNITY'
export const RECEIVE_COMMUNITY = 'RECEIVE_COMMUNITY'


const workshopCommunity = (workshopSlug) =>
    BASE_URL + 'users'


export const requestCommunity = () => ({
    type: REQUEST_COMMUNITY
})


export const receiveCommunity = json => ({
    type: RECEIVE_COMMUNITY,
    participations: json
})


export const fetchCommunity = workshopSlug => dispatch => {
    dispatch(requestCommunity())
    return fetch(workshopCommunity(workshopSlug))
        .then(response => response.json())
        .then(json => dispatch(receiveCommunity(json)))
}
