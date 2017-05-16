import {BASE_URL} from '../../constants'

export const REQUEST_RESOURCES = 'REQUEST_RESOURCES'
export const RECEIVE_RESOURCES = 'RECEIVE_RESOURCES'


const resourcesList = (workshop) =>
    BASE_URL + 'workshops/' + workshop


export const requestResources = () => ({
    type: REQUEST_RESOURCES
})


export const receiveResources = json => ({
    type: RECEIVE_RESOURCES,
    resources: json
})


export const fetchResources = workshop => dispatch => {
    dispatch(requestResources())
    return fetch(resourcesList(workshop))
        .then(response => response.json())
        .then(json => dispatch(receiveResources(json)))
}
