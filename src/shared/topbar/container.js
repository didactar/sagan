import React, { Component } from 'react'
import { connect } from 'react-redux'
import Topbar from './Topbar'


class TopbarContainer extends Component {

    render = () => <Topbar color={this.props.color} />

}


export default connect()(TopbarContainer)
