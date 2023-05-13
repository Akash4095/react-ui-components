import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Comment from './pages/comment'
import Dashboard from './pages/dashboard'
import Product from './pages/product'
import ProductList from './pages/productList'
import Analytics from './pages/analytics'
import About from './pages/about'
import Sidebar from './sidebar'

const SidebarMain = () => {
    return (

        <Sidebar >
            <Routes>
                <Route path='/' element={<Dashboard />} />
                <Route path='/dashboard' element={<Dashboard />} />
                <Route path='/about' element={<About />} />
                <Route path='/comment' element={<Comment />} />
                <Route path='/analytics' element={<Analytics />} />
                <Route path='/product' element={<Product />} />
                <Route path='/productlist' element={<ProductList />} />
            </Routes>
        </Sidebar>

    )
}

export default SidebarMain