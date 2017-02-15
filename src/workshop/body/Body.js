import React from 'react'
import Calendar from './calendar'
import Guide from './guide'
import Sidenav from './sidenav'
import Tags from './tags'


const TabContent = ({workshop, activeTab}) => {
    switch (activeTab) {
        case 'guide':
            return <Guide workshop={workshop} />
        case 'calendar':
            return <Calendar workshop={workshop} />
        default:
            return null
    }
}


const Tab = props =>
    <div className='workshop-body-tab'>
        <TabContent {...props} />
    </div>


const Body = props =>
    <div className='workshop-body'>
        <Sidenav {...props} />
        <Tab {...props} />
        <Tags {...props} />
    </div>


export default Body
