import React from 'react'
import Navbar from './Navbar.js'

export default function Header() {

  return (
    <header>
      <div className='headerStyle'>
          <a href='/'><h1 className='headerTitle'>Ben Hillier</h1></a>
        <Navbar/>
      </div>
    </header>

  )
}
