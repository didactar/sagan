import React from 'react'
import Navbar from './Navbar'


const Resource = ({resource}) =>
    <span 
        href={resource.link}
        className='resource'
    >
        <div 
            className='resource-image'
            style={{'backgroundImage': 'url(/images/resources/' + resource.image + '.jpg)'}}
        >
        </div>
        <div className='resource-content'>
            <div className='resource-title'>
                {resource.title}
            </div>
            <div className='resource-description'>
                {resource.description}
            </div>
        </div>
    </span>


const Resources = props =>
    <div>
        <Navbar {...props } />
        <div className='workshop-resources'>
            {props.resources.map((resource, i) =>
                <Resource key={i} resource={resource} />
            )}
        </div>
    </div>


export default Resources
