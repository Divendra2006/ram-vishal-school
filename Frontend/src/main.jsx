import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import Home from './components/Home/Home.jsx'
import About from './components/About/About.jsx'
import Contact from './components/Contact/Contact.jsx'
import Login from './components/Login/Login.jsx'
import Signup from './components/Signup/Signup.jsx'
import TermsAndConditions from './components/TermsAndConditions/TermsAndConditions.jsx'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App/>}>
      <Route path='' element={<Home/>}></Route>
      <Route path='/about' element={<About/>} ></Route>
      <Route path='/contact' element={<Contact/>} ></Route>
      <Route path='/Login' element={<Login/>} ></Route>
      <Route path='/Signup' element={<Signup/>} ></Route>
      <Route path='/terms' element={<TermsAndConditions/>}></Route>

    </Route>
  )
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
