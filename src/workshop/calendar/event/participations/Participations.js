import React, { PropTypes } from 'react'
import { Spinner, Users } from '../../../../shared'


const UserList = props =>
    <div className='participations-users'>
        {props.fetching
            ? <Spinner />
            : <Users users={props.participations} />}
    </div>


const Participations = props =>
    <div className={
            props.event.slug === props.expandedEvent.slug 
                ? 'participations participations-visible'
                : 'participations participations-hidden'}
    >
        <UserList {...props} />
    </div>


Participations.propTypes = {
    event: PropTypes.object.isRequired,
    expandedEvent: PropTypes.object.isRequired,
    participations: PropTypes.array.isRequired,
    fetching: PropTypes.bool.isRequired,
}


export default Participations
