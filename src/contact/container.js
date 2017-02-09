import React, { Component } from 'react'
import { connect } from 'react-redux'
import Contact from './Contact'


class ContactContainer extends Component {

    render = () => 
        <Contact />

}


export default connect()(ContactContainer)
