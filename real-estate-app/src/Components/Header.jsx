import React from 'react'
import "../Styles/header.css"
import Logout from './Auth/Logout/Logout';

export default function Header() {
  return (
    <div className="header">
          <div className="userid">USER ID: 55448877</div>
          <div className="username">
            <select name="users" id="users">
              <option value="user1">User 1</option>
              <option value="user2">User 2</option>
              <option value="user3">User 3</option>
            </select>
          </div>
          <Logout className="logout"/>
        </div>
  )
}