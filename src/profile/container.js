import React, { Component } from 'react'
import { connect } from 'react-redux'
import * as actions from './actions'
import Profile from './Profile'


class ProfileContainer extends Component {

    render = () => 
        <Profile {...this.props} />

}


export default connect(
    state => state.profile, 
    actions
)(ProfileContainer)
