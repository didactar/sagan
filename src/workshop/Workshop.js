import React, { PropTypes } from 'react'
import Topbar from '../shared/topbar'
import Header from './header'
import Body from './body'

     
const Workshop = props =>
    <div>
        <Topbar color='dark' />
        <Header {...props} />
        <Body 
            workshop={props.workshop}
            activeTab={props.activeTab}
            showEvent={props.showEvent}
            eventSlug={props.eventSlug}
        />
    </div>


Workshop.propTypes = {
    workshop: PropTypes.object.isRequired,
    activeTab: PropTypes.string.isRequired,
    showGuide: PropTypes.func.isRequired,
    showCalendar: PropTypes.func.isRequired,
    showEvent: PropTypes.func.isRequired,
    showCommunity: PropTypes.func.isRequired,
    showRelated: PropTypes.func.isRequired,
    eventSlug: PropTypes.string
}


export default Workshop
