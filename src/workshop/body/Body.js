import React from 'react'
import Guide from './guide'
import Community from './community'
import Event from './event'


const WorkshopBody = props => {

    switch (props.bodyContent) {

        case 'resources':
            return <Guide {...props} />

        case 'community':
            return <Community {...props} />

        case 'event':
            return <Event {...props} />

        default:
            return null

    }

}


export default WorkshopBody
