import React from 'react'
import { Topbar } from '../shared'
import Header from './header'
import Workshops from './workshops'


export default props =>
    <div>
        <Topbar theme='light' /> 
        <div className='user'>
            <Header {...props} />
            <Workshops {...props} />
        </div>
    </div>
