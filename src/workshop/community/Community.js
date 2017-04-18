import React  from 'react'
import { Users } from '../../shared'

const users = [
    {user: {
      "about": "", 
      "avatar": "carl-sagan", 
      "id": 1, 
      "name": "Carl Sagan", 
      "username": "carl-sagan"
    }}, 
    {user: {
      "about": "", 
      "avatar": "isaac-asimov", 
      "id": 2, 
      "name": "Isaac Asimov", 
      "username": "isaac-asimov"
    }}, 
    {user: {
      "about": "", 
      "avatar": "richard-feynman", 
      "id": 3, 
      "name": "Richard Feynman", 
      "username": "richard-feynman"
    }}, 
    {user: {
      "about": "", 
      "avatar": "jane-goodall", 
      "id": 4, 
      "name": "Jane Goodall", 
      "username": "jane-goodall"
   }}, 
    {user: {
      "about": "", 
      "avatar": "david-attenborough", 
      "id": 5, 
      "name": "David Attenborough", 
      "username": "david-attenborough"
   }}, 
    {user: {
      "about": "", 
      "avatar": "dan-ariely", 
      "id": 6, 
      "name": "Dan Ariely", 
      "username": "dan-ariely"
   }}, 
    {user: {
      "about": "", 
      "avatar": "john-green", 
      "id": 7, 
      "name": "John Green", 
      "username": "john-green"
   }}
]

/*
const UserList = props =>
    <div className='participations-users'>
        {props.fetching
            ? <Spinner />
            : <Users users={props.participations} />}
    </div>
*/


const UserList = props =>
    <div className='workshop-community-users'>
        <Users users={users} />
    </div>


const Community = props =>
    <div className='workshop-community'>
        <UserList {...props} />
    </div>

/*
Community.propTypes = {
    event: PropTypes.object.isRequired,
    expandedEvent: PropTypes.object.isRequired,
    participations: PropTypes.array.isRequired,
    fetching: PropTypes.bool.isRequired,
}
*/

export default Community
