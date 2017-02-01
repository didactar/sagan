import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { fetchWorkshop } from './actions'
import Workshop from './Workshop'


class WorkshopContainer extends Component {

    static propTypes = {
        workshop: PropTypes.object.isRequired,
        fetching: PropTypes.bool.isRequired
    }

    componentDidMount() {
        const slug = this.props.params.workshop
        this.props.dispatch(fetchWorkshop(slug))
    }

    render() {
        return <Workshop 
                    workshop={this.props.workshop} 
                    fetching={this.props.fetching} 
                />
    }

}


const mapStateToProps = state => {
    const { workshop, fetching } = state.workshop
    return { workshop, fetching }
}


export default connect(mapStateToProps)(WorkshopContainer)
