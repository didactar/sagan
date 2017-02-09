import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import * as actions from './actions'
import Calendar from './Calendar'


class CalendarContainer extends Component {

    static propTypes = {
        calendarTab: PropTypes.string.isRequired,
        workshop: PropTypes.object.isRequired
    }

    render = () =>
        <Calendar {...this.props} />

}


export default connect(
    state => state.workshop.calendar.calendarTab, 
    actions
)(CalendarContainer)
