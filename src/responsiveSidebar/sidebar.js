import React, { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { Icon } from 'semantic-ui-react'
import sidebar from './sidebar.css'

const Sidebar = ({ children }) => {
  const [isOpen, setIsOpen] = useState(true)
  const toggle = () => {
    setIsOpen(!isOpen)
  }
  const menuItem = [
    {
      path: "/dashboard",
      name: "Dashboard",
      icon: "th"
    },
    {
      path: "/about",
      name: "About",
      icon: "user"
    },
    {
      path: "/analytics",
      name: "Analytics",
      icon: "chart bar"
    },
    {
      path: "/comment",
      name: "Comment",
      icon: "comment"
    },
    {
      path: "/product",
      name: "Product",
      icon: "cart"
    },
    {
      path: "/productlist",
      name: "ProductList",
      icon: "th list"
    },
  ]
  return (
    <div className='container'>
      <div className='sidebar' style={{ width: isOpen ? "18vw" : "4vw" }}>
        <div className='top_section'>
          <h1 className='logo' style={{ display: isOpen ? "block" : "none" }}>Logo</h1>
          <div className='bars' style={{ marginLeft: isOpen ? "90px" : "0px" }}>
            <Icon name="bars" size='large' onClick={() => toggle()} />
          </div>
        </div>
        {
          menuItem.map((item, index) => (
            <NavLink to={item.path} key={index} className="link" activeclassName="active">
              <Icon name={item.icon} className="icon"></Icon>
              <div className='link_text' style={{ display: isOpen ? "block" : "none" }}>{item.name}</div>
            </NavLink>
          ))
        }
      </div>
      <main>{children}</main>
    </div>
  )
}

export default Sidebar