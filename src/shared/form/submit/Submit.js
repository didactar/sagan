import React from 'react'


export default ({label, onClick}) =>
    <div className='form-submit'>
        <span
            className='form-submit-button'
            onClick={onClick}
        >
            {label}
        </span>
    </div>
