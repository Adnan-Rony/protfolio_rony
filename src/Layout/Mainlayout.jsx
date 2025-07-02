
import { Navbar } from '../Components/Navbar'
import { Outlet } from 'react-router'
import ScrollToTop from './ScrollToTop.jsx'
import { Footer } from '../Components/Footer.jsx'

export const Mainlayout = () => {
  return (
    <div className='bg-black text-white '>
        <Navbar></Navbar>
        <Outlet></Outlet>
        
        <Footer></Footer>
     
         <ScrollToTop/>
    </div>
  )
}
