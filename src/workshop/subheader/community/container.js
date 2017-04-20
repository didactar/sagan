import React, { Component, PropTypes } from 'react'
import * as actions from './actions'
import { connect } from 'react-redux'
import Community from './Community'


class CommunityContainer extends Component {

    static propTypes = {
        event: PropTypes.object.isRequired,
        participations: PropTypes.array.isRequired,
        fetching: PropTypes.bool.isRequired
    }

    componentDidMount = () =>
        this.props.fetchCommunity(this.props.workshop.slug)

    render = () =>
        <Community {...this.props} />

}


export default connect(
    state => state.workshop.community,
    actions
)(CommunityContainer)
