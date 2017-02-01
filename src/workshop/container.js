import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { fetchWorkshop } from './actions'
import { showGuide, showCalendar, showEvent } from './actions'
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
        <Workshop 
            workshop={this.props.workshop} 
            fetching={this.props.fetching} 
            content={this.props.content} 
            showGuide={this.props.showGuide}
            showCalendar={this.props.showCalendar}
            showEvent={this.props.showEvent}
        />

}


export default connect(
    state => state.workshop.workshop, 
    {fetchWorkshop, showGuide, showCalendar, showEvent}
)(WorkshopContainer)
