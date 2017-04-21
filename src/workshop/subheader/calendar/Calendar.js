import React  from 'react'


const CalendarDate = ({event, onClick}) =>
    <div 
        className='calendar-date'
        onClick={onClick}   
    >
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
        <CalendarDate onClick={props.showEvent} />
        <CalendarDate onClick={props.showEvent} />
        <CalendarDate onClick={props.showEvent} />
        <CalendarDate onClick={props.showEvent} />
        <CalendarDate onClick={props.showEvent} />
        <CalendarDate onClick={props.showEvent} />
        <CalendarDate onClick={props.showEvent} />
    </div>


export default Calendar
