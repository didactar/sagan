import React, { Component } from 'react'
import { connect } from 'react-redux'
import * as actions from './actions'
import Resources from './Resources'
import { Loading } from '../../shared'


class ResourcesContainer extends Component {

    static propTypes = {
    }

    componentDidMount = () =>
        this.props.fetchResources(this.props.params.workshop)

    render = () =>
        this.props.fetching
            ? <Loading />
            : <Resources {...this.props} />

}


export default connect(
    state => state.workshop.resources, 
    actions
)(ResourcesContainer)
