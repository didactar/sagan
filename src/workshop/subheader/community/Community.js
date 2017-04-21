import React  from 'react'


const Tab = ({name, number, onClick}) =>
    <div 
        className='workshop-community-tab'
        onClick={onClick}
    >
        <span className='workshop-community-tab-number'>
            {number}
        </span>
        <span className='workshop-community-tab-name'>
            {name}
        </span>
    </div>


const Community = props =>
    <div className='workshop-community'>
        <Tab 
            name='community' 
            number='202k' 
            onClick={props.showCommunityUsers} 
        />
        <Tab 
            name='guides' 
            number='151k' 
            onClick={props.showCommunityUsers} 
        />
        <Tab 
            name='moderators' 
            number='14' 
            onClick={props.showCommunityUsers} 
        />
        <Tab 
            name='learners' 
            number='121k' 
            onClick={props.showCommunityUsers} 
        />
    </div>


export default Community
