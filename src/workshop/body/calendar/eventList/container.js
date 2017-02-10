import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import * as actions from './actions'
import EventList from './EventList'
import { Spinner } from '../../../../shared'


class EventListContainer extends Component {

    static propTypes = {
        events: PropTypes.array.isRequired,
        workshop: PropTypes.object.isRequired,
        fetching: PropTypes.bool.isRequired
    }

    componentDidMount = () =>
        this.props.fetchEvents(this.props.workshop.slug)

    render = () =>
        this.props.fetching
            ? <Spinner />
            : <EventList {...this.props} />

}


export default connect(
    state => state.workshop.calendar.eventList, 
    actions
)(EventListContainer)
