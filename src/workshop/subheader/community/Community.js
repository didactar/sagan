import React  from 'react'


const CommunityTab = ({name, number}) =>
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
        <CommunityTab name='community' number='202k' />
        <CommunityTab name='guides' number='151k' />
        <CommunityTab name='moderators' number='14' />
        <CommunityTab name='learners' number='121k' />
    </div>


export default Community
