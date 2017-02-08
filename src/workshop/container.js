import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { fetchWorkshop } from './actions'
import * as actions from './actions'
import Workshop from './Workshop'


class WorkshopContainer extends Component {

    static propTypes = {
        workshop: PropTypes.object.isRequired,
        fetching: PropTypes.bool.isRequired,
        content: PropTypes.string.isRequired
    }

    componentDidMount = () =>
        this.props.fetchWorkshop(this.props.params.workshop)

    render = () =>
        <Workshop {...this.props} />

}


export default connect(state => state.workshop.workshop, actions)(WorkshopContainer)
