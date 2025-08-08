import { lazy, Suspense } from 'react'
import {BrowserRouter, Routes, Route, useNavigate} from 'react-router'
import Footer from './components/Footer'
const  Dashboard = lazy(() => import('./components/Dashboard'))
const  Landing = lazy(() => import('./components/Landing'))
const  About = lazy(() => import('./components/About'))
const  Contact = lazy(() => import('./components/Contact'))
const Privacy = lazy(()=> import('./components/Privacy'))

function App() {
  


  return (
    <div>
      
      <BrowserRouter>
      <Navbar />
        <Routes>
          <Route path='/dashboard' element ={<Suspense fallback={<div>I Love you all</div>} ><Dashboard /></Suspense>} />
          <Route path='/' element ={<Suspense fallback={"loading...."}><Landing /></Suspense>} />
          <Route path='/about' element ={<Suspense fallback={"loading...."}><About /></Suspense>} />
          <Route path='/contact' element ={<Suspense fallback={"loading...."}><Contact /></Suspense>} />
          <Route path='/privacy' element ={<Suspense fallback={"loading...."}><Privacy /></Suspense>} />
        </Routes>
      <Footer />  
      </BrowserRouter>
    </div>
  )
}

function Navbar (){
  const navigate = useNavigate()

  return(
  <div>
    <nav className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <a onClick={()=> {
              navigate('/')
            }} className="text-xl font-bold text-blue-600 hover:cursor-pointer">REACT Route</a>
          </div>
          <div className="hidden md:flex items-center space-x-6">
            <a onClick={()=> {
              navigate('/')
            }} className="text-gray-700 hover:text-blue-500 hover:cursor-pointer">Home</a>
            <a onClick={()=> {
              navigate('/about')
            }} className="text-gray-700 hover:text-blue-500 hover:cursor-pointer">About</a>
            <a onClick={()=> {
              navigate('/dashboard')
            }} className="text-gray-700 hover:text-blue-500 hover:cursor-pointer">Services</a>
            <a onClick={()=> {
              navigate('/contact')
            }} className="text-gray-700 hover:text-blue-500 hover:cursor-pointer">Contact</a>
          </div>
        </div>
      </div>
    </nav>
  </div>
  )
}

export default App
