import React from 'react'
import { Workshops } from '../../shared'


export default ({items, fetching}) =>
    <div className='home-workshops'>
        <Workshops 
            workshops={items} 
            fetching={fetching} 
        />
    </div>
