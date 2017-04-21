import React, { PropTypes } from 'react'
import Topbar from '../shared/topbar'
import Header from './header'
import Subheader from './subheader'
import Body from './body'

     
const Workshop = props =>
    <div className='workshop'>
        <Topbar theme='dark' />
        <Header {...props} />
        <Subheader {...props} />
        <Body {...props} />
    </div>


Workshop.propTypes = {
    workshop: PropTypes.object.isRequired,
}


export default Workshop
