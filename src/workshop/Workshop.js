import React, { PropTypes } from 'react'
import Topbar from '../shared/topbar/container'
import Header from './header/Header'
import Footer from './footer/Footer'
import Calendar from './calendar/container'
import Event from './event/container'
import Guide from './guide/Guide'
import Loading from '../shared/loading/Loading'


const Content = ({workshop, content, showEvent}) => {
    switch (content) {
        case 'guide':
            return <Guide description={workshop.description}/>
        case 'calendar':
            return <Calendar workshop={workshop} showEvent={showEvent} />
        case 'event':
            return <Event workshop={workshop} />
        default:
            return null
    }
}


const Workshop = ({workshop, content, showGuide, showCalendar, showEvent}) =>
    <div>
        <Header workshop={workshop} content={content} />
        <Content workshop={workshop} content={content} showEvent={showEvent} />
        <Footer workshop={workshop} content={content} showGuide={showGuide} showCalendar={showCalendar} />
    </div>



const WorkshopWrapper = ({workshop, fetching, content, showGuide, showCalendar, showEvent}) =>
    <div>
        <Topbar color='dark' />
        {fetching
            ? <Loading />
            : <Workshop 
                    workshop={workshop} 
                    content={content}
                    showGuide={showGuide}
                    showCalendar={showCalendar}
                    showEvent={showEvent}
              />
        }
    </div>


WorkshopWrapper.propTypes = {
    workshop: PropTypes.object.isRequired,
    fetching: PropTypes.bool.isRequired,
    showGuide: PropTypes.func.isRequired,
    showCalendar: PropTypes.func.isRequired,
    showEvent: PropTypes.func.isRequired
}


export default WorkshopWrapper
