import React, { PropTypes } from 'react'
import Topbar from '../shared/topbar'
import Header from './header'
import Subheader from './subheader'
import Guide from './guide'

     
const Workshop = props =>
    <div className='workshop'>
        <Topbar theme='dark' />
        <Header {...props} />
        <Subheader {...props} />
        <Guide {...props} />
    </div>


Workshop.propTypes = {
    workshop: PropTypes.object.isRequired,
}


export default Workshop
