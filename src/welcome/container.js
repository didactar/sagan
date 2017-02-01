import React, { Component } from 'react'
import { connect } from 'react-redux'
import Welcome from './Welcome'
import Topbar from '../shared/topbar/container'


class WelcomeContainer extends Component {

    render = () =>
        <div>
            <Topbar />
            <Welcome />
        </div>

}


export default connect()(WelcomeContainer)
