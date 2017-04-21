import React  from 'react'


const Tab = ({name, number, onClick}) =>
    <div 
        className='workshop-filter-tab'
        onClick={onClick}
    >
        <span className='workshop-filter-tab-number'>
            {number}
        </span>
        <span className='workshop-filter-tab-name'>
            {name}
        </span>
    </div>


const Filter = props =>
    <div className='workshop-filter'>
        <Tab 
            name='all' 
            number='202k'
            onClick={props.showResources}
        />
        <Tab 
            name='video' 
            number='151k' 
            onClick={props.showResources}
        />
        <Tab 
            name='course' 
            number='14'
            onClick={props.showResources}
        />
        <Tab 
            name='article' 
            number='121k' 
            onClick={props.showResources}
        />
        <Tab 
            name='book' 
            number='121k' 
            onClick={props.showResources}
        />
        <Tab 
            name='interactive' 
            number='121k' 
            onClick={props.showResources}
        />
    </div>


export default Filter
