import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import * as actions from './actions'
import Related from './Related'


class RelatedContainer extends Component {

    static propTypes = {
        items: PropTypes.array.isRequired,
        fetching: PropTypes.bool.isRequired,
        workshop: PropTypes.object.isRequired
    }

    componentDidMount = () => 
        this.props.fetchWorkshopsIfNeeded()

    render = () =>  
        <Related 
            items={this.props.items} 
            fetching={this.props.fetching} 
        />

}


export default connect(
    state => state.workshop.related, 
    actions
)(RelatedContainer)
