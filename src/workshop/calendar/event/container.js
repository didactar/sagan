import React, { Component, PropTypes } from 'react'
import * as actions from './actions'
import { connect } from 'react-redux'
import { Loading } from '../../../shared'
import Event from './Event'


class EventContainer extends Component {

    static propTypes = {
        users: PropTypes.array.isRequired,
        fetching: PropTypes.bool.isRequired
    }

    componentDidMount = () =>
        this.props.fetchUsers(this.props.params.workshop)

    render = () =>
        this.props.fetching
            ? <Loading />
            : <Event users={this.props.users} />

}


export default connect(
    state => state.calendarEvent,
    actions
)(EventContainer)
