import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { fetchWorkshopsIfNeeded } from './actions'
import WorkshopList from './WorkshopList'


class Explore extends Component {

    static propTypes = {
        items: PropTypes.array.isRequired,
        fetching: PropTypes.bool.isRequired,
    }

    componentDidMount() {
        this.props.dispatch(fetchWorkshopsIfNeeded())
    }

    render() {
        return <WorkshopList 
                    workshops={this.props.items} 
                    fetching={this.props.fetching} 
                />
    }

}


const mapStateToProps = state => {
    const { items, fetching } = state.explore
    return { items, fetching }
}


export default connect(mapStateToProps)(Explore)
