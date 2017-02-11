import React, { PropTypes } from 'react'
import Topbar from '../shared/topbar'
import Header from './header'
import Calendar from './calendar'
import Guide from './guide'
import Community from './community'
import Related from './related'


const Index = props =>
    <div className='workshop-index'>
        <div className='workshop-body'>
            <Guide {...props} />
            <Calendar {...props} />
        </div>
        <Related {...props} />
    </div>


const Body = props => {
    switch (props.activeTab) {
        case 'index':
            return <Index {...props} />
        case 'guide':
            return <Guide {...props} />
        case 'community':
            return <Community {...props} />
        default:
            return null
    }
}

     
const Workshop = props =>
    <div>
        <Topbar color='dark' />
        <Header {...props} />
        <Body {...props} />
    </div>


Workshop.propTypes = {
    workshop: PropTypes.object.isRequired,
    activeTab: PropTypes.string.isRequired,
    showIndex: PropTypes.func.isRequired,
    showGuide: PropTypes.func.isRequired,
    showCommunity: PropTypes.func.isRequired,
}


export default Workshop
