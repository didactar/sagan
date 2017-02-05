import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { fetchWorkshopsIfNeeded } from './actions'
import Home from './Home'


class HomeContainer extends Component {

    static propTypes = {
        items: PropTypes.array.isRequired,
        fetching: PropTypes.bool.isRequired
    }

    componentDidMount = () => 
        this.props.fetchWorkshopsIfNeeded()

    render = () => 
        <Home 
            items={this.props.items} 
            fetching={this.props.fetching} 
        />

}


export default connect(
    state => state.home,
    { fetchWorkshopsIfNeeded }
)(HomeContainer)
