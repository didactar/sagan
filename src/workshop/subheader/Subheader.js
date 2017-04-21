import React from 'react'
import Calendar from './calendar'
import Community from './community'
import Resources from './resources'
import Publish from './publish'
import Subscribe from './subscribe'


const Content = props => {

    switch (props.subheaderContent) {

        case 'community':
            return <Community {...props} />

        case 'calendar':
            return <Calendar {...props} />

        case 'resources':
            return <Resources {...props} />

        case 'publish':
            return <Publish {...props} />

        case 'subscribe':
            return <Subscribe {...props} />

        default:
            return null

    }

}


const Subheader = props =>
    <div className='subheader'>
        <Content {...props} />
    </div>


export default Subheader
