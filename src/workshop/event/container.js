import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import Event from './Event'


class EventContainer extends Component {

    static propTypes = {
        workshop: PropTypes.object.isRequired,
        fetching: PropTypes.bool.isRequired
    }

    render = () =>
        <Event 
            event={this.props.event} 
            fetching={this.props.fetching} 
        />

}


export default connect(
    state => state.workshop.event
)(EventContainer)
