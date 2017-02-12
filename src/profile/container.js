import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import * as actions from './actions'
import Profile from './Profile'


class ProfileContainer extends Component {

    static propTypes = {
        loggedIn: PropTypes.bool.isRequired,
        user: PropTypes.object.isRequired,
        logIn: PropTypes.func.isRequired,
        logOut: PropTypes.func.isRequired,
    }

    render = () => 
        <Profile {...this.props} />

}


export default connect(
    state => state.profile, 
    actions
)(ProfileContainer)
