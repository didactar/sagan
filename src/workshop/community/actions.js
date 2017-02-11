import {BASE_URL} from '../../../constants'

export const REQUEST_COMMUNITY = 'REQUEST_COMMUNITY'
export const RECEIVE_COMMUNITY = 'RECEIVE_COMMUNITY'


const community = (eventSlug) =>
    BASE_URL + 'event/' + eventSlug + '/community'


export const requestCommunity = () => ({
    type: REQUEST_COMMUNITY
})


export const receiveCommunity = json => ({
    type: RECEIVE_COMMUNITY,
    community: json
})


export const fetchCommunity = communitySlug => dispatch => {
    dispatch(requestCommunity())
    return fetch(community(eventSlug))
        .then(response => response.json())
        .then(json => dispatch(receiveCommunity(json)))
}
