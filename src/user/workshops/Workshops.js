import React from 'react'
import { Workshops } from '../../shared'


export default ({workshops}) =>
    <div className='user-workshops'>
        <Workshops workshops={workshops} />
    </div>
