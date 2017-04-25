import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { Loading } from '../../shared'
import * as actions from './actions'
import Workshops from './Workshops'


class WorkshopContainer extends Component {

    static propTypes = {
        workshops: PropTypes.array.isRequired,
        fetching: PropTypes.bool.isRequired
    }

    componentDidMount = () => 
        this.props.fetchWorkshopsIfNeeded()

    render = () =>
        this.props.fetching
            ? <Loading />
            : <Workshops workshops={this.props.workshops} />


}


export default connect(
    state => state.user.workshops, 
    actions
)(WorkshopContainer)
