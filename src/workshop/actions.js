import {BASE_URL} from '../constants'

export const REQUEST_WORKSHOP = 'REQUEST_WORKSHOP'
export const RECEIVE_WORKSHOP = 'RECEIVE_WORKSHOP'

export const SHOW_GUIDE = 'SHOW_GUIDE'
export const SHOW_COMMUNITY = 'SHOW_COMMUNITY'
export const SHOW_INDEX = 'SHOW_INDEX'


export const showGuide = () => ({
    type: SHOW_GUIDE
})


export const showCommunity = () => ({
    type: SHOW_COMMUNITY
})


export const showIndex = () => ({
    type: SHOW_INDEX
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
