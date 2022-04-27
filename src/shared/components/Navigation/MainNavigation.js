import React from 'react'
import { Link } from 'react-router-dom'
import './MainNavigation.css'
import MainHeader from './MainHeader'

const MainNavigation = (props) => {
  return (
    <MainHeader>
      <button className="main-navigation_menu-btn">
        <span />
        <span />
        <span />
      </button>
      <h1 className="main-navigation_title">
        <Link>Your Places</Link>
      </h1>

      <nav>...</nav>
    </MainHeader>
  )
}

export default MainNavigation
