import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import * as actions from './actions'
import Workshops from './Workshops'


class WorkshopContainer extends Component {

    static propTypes = {
        items: PropTypes.array.isRequired,
        fetching: PropTypes.bool.isRequired
    }

    componentDidMount = () => 
        this.props.fetchWorkshopsIfNeeded()

    render = () => 
        <Workshops
            items={this.props.items} 
            fetching={this.props.fetching} 
        />

}


export default connect(
    state => state.profile, 
    actions
)(WorkshopContainer)
