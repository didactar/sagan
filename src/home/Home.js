import React from 'react'
import WorkshopList from '../shared/workshops/Workshops'
import Topbar from '../shared/topbar/container'


const Home = ({items, fetching}) =>
    <div className='home'>
        <WorkshopList 
            workshops={items} 
            fetching={fetching} 
        />
    </div>



export default ({items, fetching}) =>
    <div>
        <Topbar /> 
        <Home items={items} fetching={fetching} />
    </div>
