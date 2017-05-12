import React  from 'react'


const Date = ({event, onClick}) =>
    <div 
        className='date'
        onClick={onClick}   
    >
        <div className='date-day'>
            20
        </div>
        <div className='date-monthhour'>
            <div className='date-month'>
                Jul 2017
            </div>
            <div className='date-hour'>
                16:30
            </div>
        </div>
    </div>


const Dates = props => 
    <div className='dates'>
        <Date onClick={props.showEvent} />
        <Date onClick={props.showEvent} />
        <Date onClick={props.showEvent} />
        <Date onClick={props.showEvent} />
        <Date onClick={props.showEvent} />
        <Date onClick={props.showEvent} />
        <Date onClick={props.showEvent} />
        <Date onClick={props.showEvent} />
    </div>


export default Dates
