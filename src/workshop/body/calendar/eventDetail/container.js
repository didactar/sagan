import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import EventDetail from './EventDetail'


class EventDetailContainer extends Component {

    render = () =>
        <EventDetail {...this.props} />  

}


export default connect(state => state.workshop.calendar)(EventDetailContainer)
