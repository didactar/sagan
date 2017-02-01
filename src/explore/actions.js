import {BASE_URL} from '../constants'

export const REQUEST_WORKSHOPS = 'REQUEST_WORKSHOPS'
export const RECEIVE_WORKSHOPS = 'RECEIVE_WORKSHOPS'


const workshopList = () =>
    BASE_URL + 'workshops'


export const requestWorkshops = () => ({
    type: REQUEST_WORKSHOPS
})


export const receiveWorkshops = json => ({
    type: RECEIVE_WORKSHOPS,
    items: json.data
})


const fetchWorkshops = () => dispatch => {
    dispatch(requestWorkshops())
    return fetch(workshopList())
        .then(response => response.json())
        .then(json => dispatch(receiveWorkshops(json)))
}


export const fetchWorkshopsIfNeeded = () => (dispatch, getState) => {
    const state = getState()
    if (!state.items || (state.items && !state.fetching)) {
        return dispatch(fetchWorkshops())
    }
}
