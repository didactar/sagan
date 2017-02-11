import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import * as actions from './actions'
import Workshop from './Workshop'
import { Loading } from '../shared'


class WorkshopContainer extends Component {

    static propTypes = {
        workshop: PropTypes.object.isRequired,
        fetching: PropTypes.bool.isRequired,
        activeTab: PropTypes.string.isRequired,
        showIndex: PropTypes.func.isRequired,
        showGuide: PropTypes.func.isRequired,
        showCalendar: PropTypes.func.isRequired,
        showCommunity: PropTypes.func.isRequired,
        eventSlug: PropTypes.string
    }


    componentDidMount = () =>
        this.props.fetchWorkshop(this.props.params.workshop)

    render = () =>
        this.props.fetching
            ? <Loading />
            : <Workshop {...this.props} />

}


export default connect(state => state.workshop.workshop, actions)(WorkshopContainer)
