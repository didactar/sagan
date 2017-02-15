import React from 'react'
import Calendar from './calendar'
import Guide from './guide'


const Tab = ({workshop, activeTab}) => {
    switch (activeTab) {
        case 'guide':
            return <Guide workshop={workshop} />
        case 'calendar':
            return <Calendar workshop={workshop} />
        default:
            return null
    }
}


const Body = props =>
    <div className='workshop-body'>
        <Tab {...props} />
    </div>


export default Body
