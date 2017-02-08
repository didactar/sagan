import React, { PropTypes } from 'react'
import Topbar from '../shared/topbar/container'
import Header from './header/Header'
import Body from './body/Body'

     
const Workshop = props =>
    <div>
        <Topbar color='dark' />
        <Header 
            workshop={props.workshop} 
            activeTab={props.activeTab} 
            showGuide={props.showGuide} 
            showCalendar={props.showCalendar} 
            showCommunity={props.showCommunity} 
        />
        <Body 
            workshop={props.workshop}
            showEvent={props.showEvent}
            activeTab={props.activeTab}
        />
    </div>


Workshop.propTypes = {
    workshop: PropTypes.object.isRequired,
    showGuide: PropTypes.func.isRequired,
    showCalendar: PropTypes.func.isRequired,
    showEvent: PropTypes.func.isRequired,
    showCommunity: PropTypes.func.isRequired,
}


export default Workshop
