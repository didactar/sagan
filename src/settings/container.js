import React, { Component } from 'react'
import { connect } from 'react-redux'
import Settings from './Settings'


class SettingsContainer extends Component {

    render = () => 
        <Settings />

}


export default connect()(SettingsContainer)
