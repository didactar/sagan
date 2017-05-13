import React, { PropTypes, Component } from 'react'
import { connect } from 'react-redux'
import { Loading } from '../shared'
import * as actions from './actions'
import User from './User'


class UserContainer extends Component {

    static propTypes = {
        user: PropTypes.object.isRequired,
        fetching: PropTypes.bool.isRequired,
        showWorkshops: PropTypes.func.isRequired,
        showSessions: PropTypes.func.isRequired,
        showAbout: PropTypes.func.isRequired,
    }

    componentDidMount = () =>
        this.props.fetchUser(this.props.params.username)

    render = () =>
        this.props.fetching
            ? <Loading />
            : <User {...this.props} />


}


export default connect(
    state => state.user.user, 
    actions
)(UserContainer)
