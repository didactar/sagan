import React from 'react'
import Calendar from './calendar'
import Community from './community'
import Resources from './resources'
import Publish from './publish'
import Subscribe from './subscribe'


const Content = ({subheaderContent}) => {

    switch (subheaderContent) {

        case 'community':
            return <Community />

        case 'calendar':
            return <Calendar />

        case 'resources':
            return <Resources />

        case 'publish':
            return <Publish />

        case 'subscribe':
            return <Subscribe />

        default:
            return null

    }

}


const Subheader = props =>
    <div className='subheader'>
        <Content {...props} />
    </div>


export default Subheader
