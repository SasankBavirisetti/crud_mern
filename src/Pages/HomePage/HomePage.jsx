import React from 'react'
import { Navbar } from './Navbar/Navbar'
import { Homedata } from './Homedata/Homedata'

export const HomePage = () => {
  return (
    <div className='homepage'>
      <Navbar />
      <Homedata/>
    </div>
  )
}
