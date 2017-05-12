import React from 'react'
import Navbar from './Navbar'


const Resource4 = props =>
    <span 
        href='/'
        className='resource'
    >
        <div className='resource-image'>
        </div>
        <div className='resource-image'>
        </div>
        <div className='resource-content'>
            <div className='resource-title'>
                Longer resource title
            </div>
            <div className='resource-description'>
                Resource link about the topic of this workshop.
                Resource link about the topic of this workshop.
                Resource link about the topic of this workshop.
                Resource link about the topic of this workshop.
            </div>
        </div>
    </span>


const Resource3 = props =>
    <span 
        href='/'
        className='resource'
    >
        <div className='resource-image'>
        </div>
        <div className='resource-content'>
            <div className='resource-title'>
                Resource title
            </div>
            <div className='resource-description'>
                Resource link about the topic of this workshop.
                Resource link about the topic of this workshop.
            </div>
        </div>
    </span>


const Resource2 = props =>
    <span 
        href='/'
        className='resource'
    >
        <div className='resource-content'>
            <div className='resource-title'>
                Resource number two title
            </div>
            <div className='resource-description'>
                Resource link about the topic of this workshop.
                Resource link about the topic of this workshop.
                Resource link about the topic of this workshop.
            </div>
        </div>
    </span>


const Resource1 = props =>
    <span 
        href='/'
        className='resource'
    >
        <div className='resource-content'>
            <div className='resource-title'>
                Resource link about the topic of this workshop.
            </div>
        </div>
    </span>



const Guide = props =>
    <div>
        <Navbar {...props } />
        <div className='workshop-guide'>
            <Resource1 />
            <Resource2 />
            <Resource3 />
            <Resource2 />
            <Resource2 />
            <Resource3 />
            <Resource4 />
            <Resource2 />
            <Resource4 />
            <Resource2 />
            <Resource3 />
            <Resource4 />
            <Resource4 />
            <Resource3 />
            <Resource2 />
            <Resource2 />
            <Resource3 />
            <Resource4 />
            <Resource2 />
            <Resource3 />
            <Resource4 />
            <Resource2 />
            <Resource3 />
        </div>
    </div>


export default Guide
