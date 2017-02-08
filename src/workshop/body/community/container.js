import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import Community from './Community'


class CommunityContainer extends Component {

    static propTypes = {
        workshop: PropTypes.object.isRequired,
        fetching: PropTypes.bool.isRequired
    }

    render = () =>
        <Community {...this.props} />

}


export default connect(state => state.workshop.community)(CommunityContainer)
