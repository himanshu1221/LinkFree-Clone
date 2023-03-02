import React from 'react'
import './navbar.css';
export const Navbar = () => {
  return (
    <div>
        <ul className='flex flex-row parent_nav' style={{listStyle:"none",background:"#000d21"}}>
          <div className='flex flex-row navbar'>
            <li>search</li>
            <li>Events</li>
            <li>Map</li>
            <li>Docs</li>
          </div>
        </ul>
    </div>          
  )
}
