import React, { Component } from 'react'
import { connect } from 'react-redux'
import Profile from './Profile'


class ProfileContainer extends Component {

    render = () => 
        <Profile />

}


export default connect()(ProfileContainer)
