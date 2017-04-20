import React  from 'react'


const Tab = ({name, number}) =>
    <div className='workshop-community-tab'>
        <span className='workshop-community-tab-number'>
            {number}
        </span>
        <span className='workshop-community-tab-name'>
            {name}
        </span>
    </div>


const Community = props =>
    <div className='workshop-community'>
        <Tab name='community' number='202k' />
        <Tab name='guides' number='151k' />
        <Tab name='moderators' number='14' />
        <Tab name='learners' number='121k' />
    </div>


export default Community
