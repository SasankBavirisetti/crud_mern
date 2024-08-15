import React from 'react'
import './Navbar.css'

export const Navbar = (props) => {
  return (
    <div className='nav-page'>
        <h1>{props.heading}</h1>
    </div>
  )
}
