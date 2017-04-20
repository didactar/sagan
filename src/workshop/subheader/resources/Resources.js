import React  from 'react'


const Tab = ({name, number}) =>
    <div className='workshop-filter-tab'>
        <span className='workshop-filter-tab-number'>
            {number}
        </span>
        <span className='workshop-filter-tab-name'>
            {name}
        </span>
    </div>


const Filter = props =>
    <div className='workshop-filter'>
        <Tab name='all' number='202k' />
        <Tab name='video' number='151k' />
        <Tab name='course' number='14' />
        <Tab name='article' number='121k' />
        <Tab name='book' number='121k' />
        <Tab name='audio' number='121k' />
        <Tab name='interactive' number='121k' />
    </div>


export default Filter
