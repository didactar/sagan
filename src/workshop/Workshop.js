import React, { PropTypes } from 'react'
import Topbar from '../shared/topbar'
import Header from './header'
import Guide from './guide'
import Community from './community'
import Related from './related'

     
const Workshop = props =>
    <div className='workshop'>
        <Topbar theme='dark' />
        <Header {...props} />
        <Guide {...props} />
        <Community {...props} />
        <Related {...props} />
    </div>


Workshop.propTypes = {
    workshop: PropTypes.object.isRequired,
}


export default Workshop
