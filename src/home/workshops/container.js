import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import * as actions from './actions'
import Workshops from './Workshops'


class WorkshopsContainer extends Component {

    static propTypes = {
        workshops: PropTypes.array.isRequired,
        fetching: PropTypes.bool.isRequired
    }

    componentDidMount = () => 
        this.props.fetchWorkshopsIfNeeded()

    render = () => 
        <Workshops 
            workshops={this.props.workshops} 
            fetching={this.props.fetching} 
        />

}


export default connect(
    state => state.home, actions
)(WorkshopsContainer)
