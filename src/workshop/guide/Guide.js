import React from 'react'


const Resource = props =>
    <a 
        href='/'
        className='workshop-guide-panel-resource'
    >
        Resource link about this topic and panel
    </a>


const Panel5 = props =>
    <div className='workshop-guide-panel'>
        <div className='workshop-guide-panel-title'>
            Guide Panel Title
        </div>
        <Resource />
        <Resource />
        <Resource />
        <Resource />
        <Resource />
        <Resource />
        <Resource />
        <Resource />
        <Resource />
        <Resource />
        <Resource />
        <Resource />
        <Resource />
    </div>


const Panel4 = props =>
    <div className='workshop-guide-panel'>
        <div className='workshop-guide-panel-title'>
            Guide Panel Title
        </div>
        <Resource />
        <Resource />
        <Resource />
        <Resource />
        <Resource />
        <Resource />
        <Resource />
        <Resource />
        <Resource />
        <Resource />
    </div>


const Panel3 = props =>
    <div className='workshop-guide-panel'>
        <div className='workshop-guide-panel-title'>
            Guide Panel Title
        </div>
        <Resource />
        <Resource />
        <Resource />
        <Resource />
        <Resource />
        <Resource />
        <Resource />
        <Resource />
    </div>


const Panel2 = props =>
    <div className='workshop-guide-panel'>
        <div className='workshop-guide-panel-title'>
            Guide Panel Title
        </div>
        <Resource />
        <Resource />
        <Resource />
        <Resource />
        <Resource />
        <Resource />
    </div>


const Panel1 = props =>
    <div className='workshop-guide-panel'>
        <div className='workshop-guide-panel-title'>
            Guide Panel Title
        </div>
        <Resource />
        <Resource />
        <Resource />
        <Resource />
    </div>


const Guide = props =>
    <div className='workshop-guide'>
        <Panel2 />
        <Panel4 />
        <Panel1 />
        <Panel5 />
        <Panel1 />
        <Panel3 />
        <Panel2 />
        <Panel3 />
        <Panel4 />
        <Panel5 />
    </div>


export default Guide
