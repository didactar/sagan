import React, { PropTypes } from 'react'
import Topbar from '../shared/topbar'
import Header from './header'
import Guide from './guide'
import Community from './community'
import Event from './event'
import Calendar from './calendar'
import Related from './related'


const Home = props => 
    <div>
        <Guide {...props} />
        <Community {...props} />
        <Calendar {...props} />
    </div>


const Body = props => {

    switch (props.bodyContent) {

        case 'home':
            return <Home {...props} />

        case 'resources':
            return <Guide {...props} />

        case 'community':
            return <Community {...props} />

        case 'event':
            return <Event {...props} />

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
