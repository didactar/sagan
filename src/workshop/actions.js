import {BASE_URL} from '../constants'

export const REQUEST_WORKSHOP = 'REQUEST_WORKSHOP'
export const RECEIVE_WORKSHOP = 'RECEIVE_WORKSHOP'
export const SHOW_CALENDAR = 'SHOW_CALENDAR'
export const SHOW_COMMUNITY = 'SHOW_COMMUNITY'
export const SHOW_RESOURCES_FILTER = 'SHOW_RESOURCES_FILTER'
export const SHOW_PUBLISH = 'SHOW_PUBLISH'
export const SHOW_SUBSCRIBE = 'SHOW_SUBSCRIBE'
export const HIDE_SUBHEADER = 'HIDE_SUBHEADER'
export const SHOW_COMMUNITY_USERS = 'SHOW_COMMUNITY_USERS'
export const SHOW_RESOURCES = 'SHOW_RESOURCES'
export const SHOW_EVENT = 'SHOW_EVENT'


export const showEvent = () => ({
    type: SHOW_EVENT
})


export const showResources = () => ({
    type: SHOW_RESOURCES
})


export const showCommunityUsers = () => ({
    type: SHOW_COMMUNITY_USERS
})


export const showResourcesFilter = () => ({
    type: SHOW_RESOURCES_FILTER
})


export const showCommunity = () => ({
    type: SHOW_COMMUNITY
})


export const showCalendar = () => ({
    type: SHOW_CALENDAR
})


export const showPublish = () => ({
    type: SHOW_PUBLISH
})


export const showSubscribe = () => ({
    type: SHOW_SUBSCRIBE
})


export const hideSubheader = () => ({
    type: HIDE_SUBHEADER
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
