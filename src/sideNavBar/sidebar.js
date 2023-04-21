import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Icon } from 'semantic-ui-react'
import { SideBarData } from './sidebarData'
import './sidebar.css'


const SideNavbar = () => {
    const [sidebar, setSidebar] = useState(false)

    const showSideBar = () => {
        setSidebar(!sidebar)
    }
    console.log('sidebar', sidebar)
    return (
        <>
            <div className='navbar'>
                <Link to="/sms" className='menu-bars'>
                    <Icon color='white' name='bars' onClick={()=>showSideBar()} />
                </Link>
            </div>
            <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
                <ul className='nav-menu-items'>
                    <li className='navbar-toggle'>
                        <Link to='/sms' className="menu-bars">
                            <Icon color='white' name='close' onClick={()=>showSideBar()}/>
                        </Link>
                    </li>
                    {
                        SideBarData.map((item, index) => {
                            return (
                                <li key={index} className={item.cName}>
                                    <Link to={item.path} >
                                        <Icon name={item.icon}></Icon>
                                        <span>{item.title}</span>
                                    </Link>
                                </li>
                            )
                        })
                    }

                </ul>
            </nav>
        </>
    )
}

export default SideNavbar