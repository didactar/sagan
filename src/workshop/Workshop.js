import React, { PropTypes } from 'react'
import Topbar from '../shared/topbar/container'
import Header from './header/Header'
import Body from './body/Body'
import Loading from '../shared/loading/Loading'


const Workshop = ({workshop, content, showGuide, showCalendar, showEvent}) =>
    <div>
        <Header 
            workshop={workshop} 
            content={content} 
            showGuide={showGuide} 
            showCalendar={showCalendar} 
        />
        <Body 
            workshop={workshop} 
            content={content} 
            showEvent={showEvent} 
        />
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
