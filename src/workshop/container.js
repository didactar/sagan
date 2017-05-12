import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import * as actions from './actions'
import Workshop from './Workshop'
import { Loading } from '../shared'


class WorkshopContainer extends Component {

    static propTypes = {
        workshop: PropTypes.object.isRequired,
        fetching: PropTypes.bool.isRequired,
        showHome: PropTypes.func.isRequired,
        showCommunity: PropTypes.func.isRequired,
        showResources: PropTypes.func.isRequired,
    }

    componentDidMount = () =>
        this.props.fetchWorkshop(this.props.params.workshop)

    render = () =>
        this.props.fetching
            ? <Loading />
            : <Workshop {...this.props} />

}


export default connect(
    state => state.workshop, 
    actions
)(WorkshopContainer)
