import React, { Component, PropTypes } from 'react'
import * as actions from './actions'
import { connect } from 'react-redux'
import Participations from './Participations'
import { Spinner } from '../../../shared'


class ParticipationsContainer extends Component {

    static propTypes = {
        eventSlug: PropTypes.string.isRequired,
        participations: PropTypes.array.isRequired,
        fetching: PropTypes.bool.isRequired
    }

    componentDidMount = () =>
        this.props.fetchParticipations(this.props.eventSlug)

    render = () =>
        this.props.fetching
            ? <Spinner />
            : <Participations {...this.props} />

}


export default connect(
    state => state.workshop.event.participations,
    actions
)(ParticipationsContainer)
