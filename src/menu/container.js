import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import * as actions from './actions'
import Menu from './Menu'


class MenuContainer extends Component {

    static propTypes = {
        loggedIn: PropTypes.bool.isRequired,
        user: PropTypes.object.isRequired,
        logIn: PropTypes.func.isRequired,
        logOut: PropTypes.func.isRequired,
    }

    render = () => 
        <Menu {...this.props} />

}


export default connect(
    state => state.menu, 
    actions
)(MenuContainer)
