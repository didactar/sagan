import React from 'react'
import { Topbar, Workshops } from '../shared'
import Welcome from './welcome'


const Home = ({items, fetching}) =>
    <div className='home'>
        <Workshops 
            workshops={items} 
            fetching={fetching} 
        />
    </div>


export default ({items, fetching}) =>
    <div>
        <Topbar theme='dark' /> 
        <Welcome />
        <Home items={items} fetching={fetching} />
    </div>
