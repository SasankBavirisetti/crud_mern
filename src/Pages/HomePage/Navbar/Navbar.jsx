import React from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom'

export const Navbar = () => {
  return (
    <div className='navbar'>
        <div className="nav-heading">
        <h1>CRUD Application</h1>
        </div>
        <Link to='/add'><button className=' button add-employee'>Add Employee</button></Link>
    </div>
  )
}
