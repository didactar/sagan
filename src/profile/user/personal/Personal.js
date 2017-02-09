import React from 'react'


const Email = () =>
    <div className='settings-input-container'> 
        <div className='settings-label'>
            Email
        </div>
        <input  
            className='settings-input'
            name='email' 
            maxLength='200' 
            type='email' 
            defaultValue='Email' 
        />
    </div>


const Location = () =>
    <div className='settings-input-container'> 
        <div className='settings-label'>
            Location
        </div>
        <input  
            className='settings-input'
            name='username' 
            maxLength='200' 
            type='text' 
            defaultValue='Location'
        />
    </div>


const Username = () =>
    <div className='settings-input-container'> 
        <div className='settings-label'>
            Username
        </div>
        <input  
            className='settings-input'
            name='username' 
            maxLength='200' 
            type='text' 
            defaultValue='Username'
        />
    </div>


export default props =>
    <div className='settings-section' > 
        <div className='main-average-column'>
            <Username {...props} />
            <Location {...props} />
            <Email {...props} />
        </div>
    </div>
