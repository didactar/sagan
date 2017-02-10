import React from 'react'
import Calendar from './calendar'
import Guide from './guide'
import Community from './community'
import Related from './related'
import Event from './event'


export default ({workshop, activeTab, showEvent, eventSlug}) => {
    switch (activeTab) {
        case 'guide':
            return <Guide workshop={workshop} />
        case 'calendar':
            return <Calendar workshop={workshop} showEvent={showEvent} />
        case 'event':
            return <Event workshop={workshop} eventSlug={eventSlug} />
        case 'community':
            return <Community workshop={workshop} />
        case 'related':
            return <Related workshop={workshop} />
        default:
            return null
    }
}
