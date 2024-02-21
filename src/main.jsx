import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import Footer from './components/Footer.jsx'
import Header from './components/Header.jsx'



ReactDOM.createRoot(document.getElementById('footer')).render(
  <React.StrictMode>
    <Footer/>
  </React.StrictMode>,
)

ReactDOM.createRoot(document.getElementById('header-section')).render(
  <React.StrictMode>
    <Header/>
  </React.StrictMode>,
)

