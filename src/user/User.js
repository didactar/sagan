import React, { PropTypes } from 'react'
import { Topbar } from '../shared'
import Header from './header'
import Workshops from './workshops'
import Calendar from './calendar'
import About from './about'


const Tab = props => {

    switch (props.selectedTab) {

        case 'workshops':
            return <Workshops {...props} />

        case 'calendar':
            return <Calendar {...props} />

        case 'about':
            return <About {...props} />

        default:
            return null

    }

}


const User = props =>
    <div>
        <Topbar theme='dark' />
        <Header {...props} />
        <Tab {...props} />
    </div>


User.propTypes = {
    user: PropTypes.object.isRequired,
}


export default User
