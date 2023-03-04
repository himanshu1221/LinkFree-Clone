import React from 'react'
import './navbar.css';
export const Navbar = () => {
  return (
        <ul className='parent_nav' style={{listStyle:"none",background:"#000d21"}}>
            <a href="https://linkfree.eddiehub.io/search"><li>Search</li></a>
            <a href="https://linkfree.eddiehub.io/events"><li>Events</li></a>
            <a href="https://linkfree.eddiehub.io/map"><li>Map</li></a>
            <a href="https://linkfree.eddiehub.io/docs"><li>Docs</li></a>
        </ul>        
  )
}
