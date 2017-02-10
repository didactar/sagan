import React, { PropTypes } from 'react'
import Content from './content'
import Participations from './participations'


const Event = ({eventSlug}) =>
    <div className='workshop-event'>
        <Content eventSlug={eventSlug} />
        <Participations eventSlug={eventSlug} />
    </div>


Event.propTypes = {
    eventSlug: PropTypes.string.isRequired,
}


export default Event
