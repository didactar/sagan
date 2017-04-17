import React, { PropTypes } from 'react'
import Topbar from '../shared/topbar'
import Header from './header'
import Body from './body'
import Related from './related'

     
const Workshop = props =>
    <div className='workshop'>
        <Topbar theme='dark' />
        <Header {...props} />
        <Body {...props} />
        <Related {...props} />
    </div>


Workshop.propTypes = {
    workshop: PropTypes.object.isRequired,
}


export default Workshop
