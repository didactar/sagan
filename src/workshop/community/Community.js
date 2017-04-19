import React  from 'react'
import { Users, Spinner } from '../../shared'

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
   }},
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


const UserList = ({fetching}) =>
    fetching
        ? <Spinner />
        : <Users users={users} />



const CommunityTab = ({name, number}) =>
    <div className='workshop-community-tab'>
        <span className='workshop-community-tab-number'>
            {number}
        </span>
        <span className='workshop-community-tab-name'>
            {name}
        </span>
    </div>



const CommunityTabs = props =>
    <div className='workshop-community-tabs'>
        <CommunityTab name='community' number='202k' />
        <CommunityTab name='educators' number='151k' />
        <CommunityTab name='moderators' number='14' />
        <CommunityTab name='learners' number='121k' />
    </div>


const Community = props =>
    <div className='workshop-community'>
        <CommunityTabs {...props} />
        <UserList fetching={false} />
    </div>


export default Community
