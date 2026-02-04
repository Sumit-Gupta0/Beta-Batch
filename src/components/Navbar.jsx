import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <nav>
        <Link style={{margin: "10px"}} to="/">Home</Link>
        <Link style={{margin: "10px"}} to="/contact">Contact</Link>
        <Link style={{margin: "10px"}} to="/blogs">Blogs</Link>
        <Link style={{margin: "10px"}} to="/login">Login</Link>
    </nav>
  )
}

export default Navbar