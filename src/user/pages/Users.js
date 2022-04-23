import React from 'react'
import UserList from '../components/UserList'

const Users = () => {
  const USERS = [
    {
      id: 'u1',
      name: 'Tri Nguyen',
      image:
        'https://images.unsplash.com/photo-1517713982677-4b66332f98de?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8cGxhY2VzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=1296&q=60',
      places: 3,
    },
  ]
  return <UserList items={USERS} />
}

export default Users
