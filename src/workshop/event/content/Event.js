import React, { PropTypes } from 'react'
import { Event } from '../../../shared'


const EventWrapper = ({event}) =>
    <Event event={event} />


EventWrapper.propTypes = {
    event: PropTypes.object.isRequired
}


export default EventWrapper
