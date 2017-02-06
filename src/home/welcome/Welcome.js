import React from 'react'


const LearnMore = () =>
    <a 
        className='welcome-learn-link'
        href='/about'
    >
        Learn more
    </a>


const WelcomeMessage = () =>
    <div className='welcome-learn-message'>
        Join an amazing community of lifelong learners at museums, libraries and public spaces.
    </div>


const Learn = () =>
    <div className='welcome-learn'>
        <WelcomeMessage />
        <LearnMore />
    </div>


export default () =>
    <div className='welcome'>
        <div className='welcome-degrade'>
            <div className='welcome-content'>
                <Learn />
            </div>
        </div>
    </div>
