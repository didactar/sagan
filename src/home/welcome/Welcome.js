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
        "Education is for improving the lives of others and for leaving your community and world better than you found it". Marian Wright Edelman
    </div>


const Learn = () =>
    <div className='welcome-learn'>
        <WelcomeMessage />
        <LearnMore />
    </div>


export default () =>
    <div className='welcome'>
        <div 
            className='welcome-image'
            style={{'backgroundImage': 'url(/images/didactar_01.jpg)'}}
        >
            <div className='welcome-degrade'>
                <div className='welcome-content'>
                    <Learn />
                </div>
            </div>
        </div>
    </div>
