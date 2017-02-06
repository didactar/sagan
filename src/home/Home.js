import React from 'react'
import WorkshopList from '../shared/workshops/Workshops'
import Topbar from '../shared/topbar/container'
import Welcome from './welcome/Welcome'


const Home = ({items, fetching}) =>
    <div className='home'>
        <WorkshopList 
            workshops={items} 
            fetching={fetching} 
        />
    </div>


export default ({items, fetching}) =>
    <div>
        <Topbar color='dark' /> 
        <Welcome />
        <Home items={items} fetching={fetching} />
    </div>
