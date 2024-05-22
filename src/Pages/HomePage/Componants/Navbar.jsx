import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <div className='navbar-com'>
        <div className="title">
            <img src="" alt="logo" />
            <h1>Disha Computer Classes</h1>
        </div>
        <ul className="navList">
            <li><Link to="">Home</Link></li>
            <li><Link to="">About</Link></li>
            <li><Link to="">Contact</Link></li>
            <li><Link to="">Courses</Link></li>
            <li><Link to="">Students</Link></li>
        </ul>
        <Link to="/partner-panel" className='P-Login'>Partner Login</Link>
    </div>
  )
}

export default Navbar