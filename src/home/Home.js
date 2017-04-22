import React from 'react'
import { Topbar } from '../shared'
import Welcome from './welcome'
import Topics from './topics'
import Workshops from './workshops'


export default ({items, fetching}) =>
    <div className='home'>
        <Topbar theme='dark' /> 
        <Welcome />
        <Topics />
        <Workshops />
    </div>
