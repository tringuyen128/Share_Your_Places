import React from 'react'

import UserItem from './UserItem'
import Card from '../../shared/components/UIElements/Card'
import './UserList.css'

const UserList = (props) => {
  //check to see if there is no user
  //items is from User.js
  if (props.items.length === 0) {
    return (
      <div className="center">
        <Card>
          <h2>no user found.</h2>
        </Card>
      </div>
    )
  }
  //if there is user, we want to have UserItem with those data

  return (
    <ul className="users-list">
      {props.items.map((user) => {
        return (
          <UserItem
            key={user.id}
            id={user.id}
            image={user.image}
            name={user.name}
            placeCount={user.places}
          />
        )
      })}
    </ul>
  )
}

export default UserList
