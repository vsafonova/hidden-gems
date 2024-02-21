import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import Footer from './components/Footer.jsx'
import Navbar from './components/Navbar.jsx'


ReactDOM.createRoot(document.getElementById('footer')).render(
  <React.StrictMode>
    <Footer/>
  </React.StrictMode>,
)

ReactDOM.createRoot(document.getElementById('navbar')).render(
  <React.StrictMode>
    <Navbar/>
  </React.StrictMode>,
)

