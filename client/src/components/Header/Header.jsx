import React from 'react'
import { Link } from 'react-router-dom'


function Header() {
  return (
    <div style={{ position: 'absolute', height: '40px' }}>
      <div>
        <Link to='/canvas' >
          Canvas
        </Link>
      </div>
      <div>
        <Link to='/' >
          ListPersons
        </Link>
      </div>
    </div>
  )
}

export default Header

