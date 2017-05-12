import React  from 'react'
import Dates  from './dates'
import Event  from './event'


const Calendar = props => 
    <div className='calendar'>
        <Dates {...props} />
        <Event {...props} />
    </div>


export default Calendar
