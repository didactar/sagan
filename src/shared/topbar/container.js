import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import * as actions from './actions'
import Topbar from './Topbar'


class TopbarContainer extends Component {

    static propTypes = {
        theme: PropTypes.string,
        showMenu: PropTypes.func.isRequired,
        hideMenu: PropTypes.func.isRequired,
        menuIsVisible: PropTypes.bool.isRequired,
    }

    constructor(props) {
        super(props)
        this.state = {
            mouseIsDownOnMenu: false
        }
    }

    componentDidMount = () =>
        window.addEventListener('mousedown', this.mouseDown, false)

    mouseDown = () =>
        !this.state.mouseIsDownOnMenu && this.props.menuIsVisible
            ? this.props.hideMenu() : null

    menuMouseDown = () =>
        this.setState({mouseIsDownOnMenu: true})

    menuMouseUp = () =>
        this.setState({mouseIsDownOnMenu: false})

    render = () => 
        <Topbar 
            {...this.props} 
            menuMouseDown={this.menuMouseDown}
            menuMouseUp={this.menuMouseUp}
        />

}


export default connect(
    state => state.topbar,
    actions
)(TopbarContainer)
