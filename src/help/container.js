import React, { Component } from 'react'
import { connect } from 'react-redux'
import Help from './Help'


class HelpContainer extends Component {

    render = () => 
        <Help />

}


export default connect()(HelpContainer)
