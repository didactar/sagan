import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { fetchWorkshopsIfNeeded } from './actions'
import WorkshopList from './WorkshopList'
import Topbar from '../shared/topbar/container'


class Explore extends Component {

    static propTypes = {
        items: PropTypes.array.isRequired,
        fetching: PropTypes.bool.isRequired
    }

    componentDidMount = () => 
        this.props.dispatch(fetchWorkshopsIfNeeded())

    render = () =>
        <div>
            <Topbar /> 
            <WorkshopList 
                workshops={this.props.items} 
                fetching={this.props.fetching} 
            />
        </div>

}


const mapStateToProps = state => state.explore


export default connect(mapStateToProps)(Explore)
