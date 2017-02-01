import React, { Component } from 'react'
import { connect } from 'react-redux'
import Topbar from './Topbar'


class TopbarContainer extends Component {

    render = () => 
        <Topbar />

}


export default connect()(TopbarContainer)
