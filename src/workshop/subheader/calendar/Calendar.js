import React  from 'react'


const CalendarDate = ({event}) =>
    <div className='calendar-date'>
        <div className='calendar-date-day'>
            20
        </div>
        <div className='calendar-date-monthhour'>
            <div className='calendar-date-month'>
                Jul 2017
            </div>
            <div className='calendar-date-hour'>
                16:30
            </div>
        </div>
    </div>


const Calendar = props => 
    <div className='calendar'>
        <CalendarDate />
        <CalendarDate />
        <CalendarDate />
        <CalendarDate />
        <CalendarDate />
        <CalendarDate />
        <CalendarDate />
    </div>

/*
Calendar.propTypes = {
    events: PropTypes.array.isRequired,
    expandEvent: PropTypes.func.isRequired,
    expandedEvent: PropTypes.object.isRequired
}
*/

export default Calendar
