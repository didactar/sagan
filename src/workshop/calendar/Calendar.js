import React, { PropTypes } from 'react'
import Event from './event'


const Filter = ({events}) => 
    <i className='calendar-header-filter fa fa-search'>
    </i>


const Title = ({events}) => 
    <div className='calendar-header'>
        <i className='calendar-header-icon fa fa-calendar-o'></i>
        <span className='calendar-header-label'>
            Calendar
        </span>
    </div>


const Header = props => 
    <div className='calendar-header'>
        <div className='calendar-header-content'>
            <Title {...props} />
            <Filter {...props} />
        </div>
    </div>
    

const Events = ({events, expandEvent, expandedEvent}) => 
    <div className='calendar-events'>
        {events.map((event, i) => 
            <Event
                key={i} 
                event={event} 
                expandEvent={expandEvent}
                expandedEvent={expandedEvent}
            />
       )}
    </div>


const Calendar = props => 
    <div className='calendar'>
        <div className='calendar-degrade'></div>
        <Header {...props} />
        <Events {...props} />
    </div>


Calendar.propTypes = {
    events: PropTypes.array.isRequired,
    expandEvent: PropTypes.func.isRequired,
    expandedEvent: PropTypes.object.isRequired
}


export default Calendar
