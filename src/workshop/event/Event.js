import React from 'react'
import Participations from './participations'
import Content from './content'


const Event = props =>
    <div className='workshop-event'>
        <Content {...props} />
        <Participations {...props} />
    </div>


export default Event
