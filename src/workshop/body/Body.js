import React from 'react'
import Calendar from './calendar/container'
import Event from './event/container'
import Guide from './guide/Guide'
import Community from './community/Community'


const BodyContent = ({workshop, content, showEvent}) => {
    switch (content) {
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


export default ({workshop, content, showEvent}) =>
    <div className='workshop-body'> 
        <BodyContent 
            workshop={workshop} 
            content={content} 
            showEvent={showEvent} 
        />
    </div>
