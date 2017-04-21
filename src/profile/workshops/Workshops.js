import React from 'react'
import { Workshops } from '../../shared'


export default ({items, fetching}) =>
    <div className='profile-workshops'>
        <Workshops 
            workshops={items} 
            fetching={fetching} 
        />
    </div>
