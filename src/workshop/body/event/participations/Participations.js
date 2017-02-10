import React, { PropTypes } from 'react'

const UserItem = ({participation}) =>
    <div className='user-item'>
        user-item
    </div>


const Participations = ({participations}) =>
    <div className='workshop-event-participations'>
        {participations.map((participation, i) =>
            <UserItem 
                key={i} 
                participation={participation} 
            />
        )}
    </div>


Participations.propTypes = {
    participations: PropTypes.array.isRequired
}


export default Participations
