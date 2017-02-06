import React, { Component } from 'react'
import { connect } from 'react-redux'
import About from './About'


class AboutContainer extends Component {

    render = () => 
        <About />

}


export default connect()(AboutContainer)
