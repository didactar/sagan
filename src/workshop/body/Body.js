import React from 'react'
import Calendar from './calendar/container'
import Guide from './guide/Guide'
import Community from './community/Community'


const Tab = ({workshop, activeTab}) => {
    switch (activeTab) {
        case 'guide':
            return <Guide workshop={workshop} />
        case 'calendar':
            return <Calendar workshop={workshop} />
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
