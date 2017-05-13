import React, { PropTypes } from 'react'
import { Workshops } from '../../shared'
import Navbar from './Navbar'


const UserWorkshops = ({workshops, fetching}) =>
    <div>
        <Navbar /> 
        <div className='user-workshops'>
            <Workshops 
                workshops={workshops} 
                fetching={fetching} 
            />
        </div>
    </div>


UserWorkshops.propTypes = {
    workshops: PropTypes.array.isRequired
}


export default UserWorkshops
