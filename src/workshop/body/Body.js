import React from 'react'
import Calendar from './calendar/container'
import Guide from './guide/Guide'
import Community from './community/Community'
import Related from './related/container'


export default ({workshop, activeTab}) => {
    switch (activeTab) {
        case 'guide':
            return <Guide workshop={workshop} />
        case 'calendar':
            return <Calendar workshop={workshop} />
        case 'community':
            return <Community workshop={workshop} />
        case 'related':
            return <Related workshop={workshop} />
        default:
            return null
    }
}
