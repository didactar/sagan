import React from 'react'
import { Workshops } from '../../shared'


export default ({items, fetching}) =>
    <div className='workshop-related'>
        <Workshops 
            workshops={items} 
            fetching={fetching} 
        />
    </div>
