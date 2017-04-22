import React from 'react'


const About = props =>
    <div className='profile-about'>
        Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet.
    </div>


const Name = props =>
    <div className='profile-username'>
        This is the User Name
    </div>


const Text = props =>
    <div>
        <Name />
        <About />
    </div>


const Picture = props =>
    <div className='profile-picture'>
    </div>


export default props =>
    <div className='profile-header'>
        <div className='profile-header-inner-wrapper'>
            <Picture />
            <Text />
        </div>
    </div>
