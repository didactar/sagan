import {BASE_URL} from '../constants'

export const REQUEST_WORKSHOP = 'REQUEST_WORKSHOPS'
export const RECEIVE_WORKSHOP = 'RECEIVE_WORKSHOPS'


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
