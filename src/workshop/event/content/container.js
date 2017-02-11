import React, { Component, PropTypes } from 'react'
import * as actions from './actions'
import { connect } from 'react-redux'
import Event from './Event'
import { Spinner } from '../../../shared'


class EventContainer extends Component {

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
            : <Event {...this.props} />

}


export default connect(
    state => state.workshop.event.content,
    actions
)(EventContainer)
