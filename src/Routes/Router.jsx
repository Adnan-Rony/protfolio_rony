import React from 'react'
import { Route, Routes } from 'react-router'
import { Home } from '../Pages/Home/Home'
import { About } from '../Pages/About/About'
import { Mainlayout } from '../Layout/Mainlayout'
import { Projects } from '../Pages/Projects/Projects'
import {  ContactPage } from '@/Pages/Contact/ContactPage'
import { Skills } from '@/Components/Skills/Skills'
import Blog from '../Pages/blogs/Blog.jsx'
import BlogDetails from '../Pages/blogs/BlogDetails.jsx'
import AllBlogs from '../Pages/blogs/AllBlogs.jsx'

export const Router = () => {
  return (
    <Routes>
        <Route  path='/' 
        element={<Mainlayout></Mainlayout>}>
            <Route index path='/' element={<Home></Home>}></Route>
            <Route path='/about' element={<About></About>}> </Route>
            <Route path='/portfolio' element={<Projects></Projects>}> </Route>
            <Route path='/skills' element={<Skills></Skills>}> </Route>
            <Route path='/contact' element={<ContactPage></ContactPage>}></Route>
            <Route path='/blog' element={<Blog></Blog>}></Route>
          <Route path="/blogs/:id" element={<BlogDetails />} />
          <Route path="/blogs" element={<AllBlogs />} />

        </Route>
    </Routes>
  )
}
