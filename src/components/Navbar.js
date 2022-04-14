import React, { useState} from 'react'
import { Link } from 'react-router-dom';
import Sidebar from './Sidebar';
import {faHome, faList, faCog} from "@fortawesome/free-solid-svg-icons";

function Navbar() {
    const [showSidebar, setShowSidebar] = useState(false)
    const links = [
      {
        name : "Home",
        path : '/home',
        icon : faHome
      },
      {
        name : "Recipes",
        path : '/recipes',
        icon : faList
      },
      {
        name : 'Settings',
        path : '/settings',
        icon : faCog
      }
    ]

    function closeSidebar(){
      showSidebar(false)
    }
    return (
    <>
      <div className='navbar container'>
          <a href='#!' className='logo'><span>M</span>ea<span>LH</span>ub</a>
          <div className='nav-links'>
            { links.map(link => (
              <a href='#!' key={link.name}>{link.name}</a>
            ))}
              {/* <a href='#!'>Home</a>
              <a href='#!'>Recipes</a>
              <a href='#!'>Settings</a> */}
          </div>
          <div onClick={() => setShowSidebar(!showSidebar)} className={showSidebar ? 'sidebar-icon active' : 'sidebar-icon'}>
              <div className='bar'></div>
              <div className='bar'></div>
              <div className='bar'></div>
          </div>
      </div>
      {showSidebar && <Sidebar close={closeSidebar} links={links} />}
    </>
  )
} 

export default Navbar;