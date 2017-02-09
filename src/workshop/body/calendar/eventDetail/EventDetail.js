import React, { PropTypes } from 'react'


const EventDetail = ({event}) =>
    <div className='workshop-event-detail'>
        {event.title}
    </div>


EventDetail.propTypes = {
    event: PropTypes.object.isRequired
}


export default EventDetail
