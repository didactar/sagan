import React from 'react'
import { Input } from '../../shared'


const Email = props =>
    <Input 
        type='mail'
        label='email'
        defaultValue='foo@bar.com'
    />


const Location = props =>
    <Input 
        type='text'
        label='location'
        defaultValue='location'
    />


const Username = props =>
    <Input 
        type='text'
        label='username'
        defaultValue='username'
    />


export default props =>
    <div className='form-section' > 
        <div className='main-average-column'>
            <Username {...props} />
            <Location {...props} />
            <Email {...props} />
        </div>
    </div>
