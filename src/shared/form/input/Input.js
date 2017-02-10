import React  from 'react'


export default ({type, label, defaultValue}) =>
    <div className='form-input-container'> 
        <div className='form-label'>
            {label}
        </div>
        <input  
            className='form-input'
            name='username' 
            maxLength='200' 
            type={type}
            defaultValue={defaultValue}
        />
    </div>
