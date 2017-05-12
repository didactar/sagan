import React, { Component, PropTypes } from 'react'
import * as actions from './actions'
import { connect } from 'react-redux'
import { Loading } from '../../shared'
import Community from './Community'


class CommunityContainer extends Component {

    static propTypes = {
        users: PropTypes.array.isRequired,
        fetching: PropTypes.bool.isRequired
    }

    componentDidMount = () =>
        this.props.fetchUsers(this.props.params.workshop)

    render = () =>
        this.props.fetching
            ? <Loading />
            : <Community 
                    users={this.props.users} 
                    showCommunity={this.props.showCommunity}
              />

}


export default connect(
    state => state.community,
    actions
)(CommunityContainer)
