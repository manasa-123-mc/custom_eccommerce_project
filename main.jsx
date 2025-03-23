import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Signin from './Signin.jsx'
import Signup from './Signup.jsx'
import Product from './Product.jsx'
import Nav from './nav.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Nav/>
  
    <App />
    <Signin/>
    <Signup/>
    <Product/>
  </StrictMode>,
)
