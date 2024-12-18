import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div>
        <Link to="/login">Login / </Link>
        <Link to="/create"> Register / </Link>
        <Link to="/getAll"> Products List /</Link>
        <Link to="/profile"> Profile</Link>
    </div>
  )
}

export default Header