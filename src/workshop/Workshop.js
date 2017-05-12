import React, { PropTypes } from 'react'
import Topbar from '../shared/topbar'
import Header from './header'
import Resources from './resources'
import Calendar from './calendar'
import Community from './community'
import Related from './related'



const Body = props => {

    switch (props.bodyContent) {

        case 'resources':
            return <Resources {...props} />

        case 'community':
            return <Community {...props} />

        case 'calendar':
            return <Calendar {...props} />

        default:
            return null

    }

}



const Content = props =>
    <div className='workshop-content'>
        <Topbar theme='dark' />
        <Header {...props} />
        <Body {...props} />
    </div>


     
const Workshop = props =>
    <div className='workshop'>
        <Content {...props} />
        <Related {...props} />
    </div>



Workshop.propTypes = {
    workshop: PropTypes.object.isRequired,
}


export default Workshop
