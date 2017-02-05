import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { fetchEvents } from './actions'
import Calendar from './Calendar'


class CalendarContainer extends Component {

    static propTypes = {
        events: PropTypes.array.isRequired,
        workshop: PropTypes.object.isRequired,
        fetching: PropTypes.bool.isRequired
    }

    componentDidMount = () =>
        this.props.fetchEvents(this.props.workshop.slug)

    render = () =>
        <Calendar 
            events={this.props.events}
            fetching={this.props.fetching}
            showEvent={this.props.showEvent}
        />

}


export default connect(
    state => state.workshop.calendar,
    { fetchEvents }
)(CalendarContainer)
