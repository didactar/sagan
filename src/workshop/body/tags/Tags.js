import React, { PropTypes } from 'react'


const Tag = ({label}) =>
    <span className='workshop-tags-tag'>
        {label}
    </span>


const Sidebar = props =>
    <div className='workshop-tags'>
        <Tag label='science' />
        <Tag label='art' />
        <Tag label='culture' />
        <Tag label='engineering' />
        <Tag label='economics' />
        <Tag label='history' />
        <Tag label='chemistry' />
        <Tag label='physics' />
        <Tag label='biology' />
        <Tag label='programming' />
    </div>


export default Sidebar
