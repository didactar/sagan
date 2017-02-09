import React, { PropTypes } from 'react'
import Topbar from '../shared/topbar/container'
import Header from './header/Header'
import Body from './body/Body'

     
const Workshop = props =>
    <div>
        <Topbar color='dark' />
        <Header {...props} />
        <Body 
            workshop={props.workshop}
            activeTab={props.activeTab}
        />
    </div>


Workshop.propTypes = {
    workshop: PropTypes.object.isRequired,
    activeTab: PropTypes.string.isRequired,
    showGuide: PropTypes.func.isRequired,
    showCalendar: PropTypes.func.isRequired,
    showCommunity: PropTypes.func.isRequired,
    showRelated: PropTypes.func.isRequired,
}


export default Workshop
