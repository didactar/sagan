import React from 'react'
import Calendar from './calendar/container'
import Event from './event/container'
import Guide from './guide/Guide'
import Community from './community/Community'


const Tab = ({workshop, activeTab, showEvent}) => {
    switch (activeTab) {
        case 'guide':
            return <Guide description={workshop.description}/>
        case 'calendar':
            return <Calendar workshop={workshop} showEvent={showEvent} />
        case 'event':
            return <Event workshop={workshop} />
        case 'community':
            return <Community workshop={workshop} />
        default:
            return null
    }
}


export default props =>
    <div className='workshop-body'> 
        <Tab {...props} />
    </div>
