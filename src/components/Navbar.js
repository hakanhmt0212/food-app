import React, { useState} from 'react'

function Navbar() {
    const [showSidebar, setShowSidebar] = useState(false)
  return (
    <div className='navbar container'>
        <a href='#!' className='logo'><span>M</span>ea<span>LH</span>ub</a>
        <div className='nav-links'>
            <a href='#!'>Home</a>
            <a href='#!'>Recipes</a>
            <a href='#!'>Settings</a>
        </div>
        <div onClick={() => setShowSidebar(!showSidebar)} className={showSidebar ? 'sidebar-icon active' : 'sidebar-icon'}>
            <div className='bar'></div>
            <div className='bar'></div>
            <div className='bar'></div>
        </div>
    </div>
  )
} 

export default Navbar;