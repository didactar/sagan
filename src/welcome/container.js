import React, { Component } from 'react'
import { connect } from 'react-redux'
import Welcome from './Welcome'


class App extends Component {

    render() {
        return <Welcome />
    }

}


export default connect()(App)
