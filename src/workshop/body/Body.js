import React from 'react'
import Calendar from './calendar'
import Guide from './guide'
import Community from './community'
import Related from './related'


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
