import React, { Component, PropTypes } from 'react'
import * as actions from './actions'
import { connect } from 'react-redux'
import EventDetail from './EventDetail'
import { Spinner } from '../../../../shared'


class EventDetailContainer extends Component {

    static propTypes = {
        eventSlug: PropTypes.string.isRequired,
        event: PropTypes.object.isRequired,
        fetching: PropTypes.bool.isRequired
    }

    componentDidMount = () =>
        this.props.fetchEvent(this.props.eventSlug)

    render = () =>
        this.props.fetching
            ? <Spinner />
            : <EventDetail {...this.props} />

}


export default connect(
    state => state.workshop.calendar.eventDetail,
    actions
)(EventDetailContainer)
