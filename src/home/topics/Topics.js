import React from 'react'


const Tab = ({name}) =>
    <div className='home-topics-tab'>
        {name}
    </div>


const Navbar = props =>
    <div className='home-topics'>
        <Tab name='physics'/>
        <Tab name='programming'/>
        <Tab name='history'/>
        <Tab name='psychology'/>
        <Tab name='art'/>
        <Tab name='biology'/>
    </div>


export default Navbar
