import React, { PropTypes, Component } from 'react'
import { connect } from 'react-redux'
import { Loading } from '../../shared'
import * as actions from './actions'
import Header from './Header'


class HeaderContainer extends Component {

    static propTypes = {
        user: PropTypes.object.isRequired,
        fetching: PropTypes.bool.isRequired,
    }

    componentDidMount = () =>
        this.props.fetchUser(this.props.params.username)

    render = () =>
        this.props.fetching
            ? <Loading />
            : <Header {...this.props} />


}


export default connect(
    state => state.user.user, 
    actions
)(HeaderContainer)
