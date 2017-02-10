import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import * as actions from './actions'
import Calendar from './Calendar'
import { Spinner } from '../../../shared'


class CalendarContainer extends Component {

    static propTypes = {
        events: PropTypes.array.isRequired,
        workshop: PropTypes.object.isRequired,
        fetching: PropTypes.bool.isRequired,
        showEvent: PropTypes.func.isRequired
    }

    componentDidMount = () =>
        this.props.fetchEvents(this.props.workshop.slug)

    render = () =>
        this.props.fetching
            ? <Spinner />
            : <Calendar {...this.props} />

}


export default connect(
    state => state.workshop.calendar, 
    actions
)(CalendarContainer)
