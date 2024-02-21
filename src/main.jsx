import React from 'react'
import ReactDOM from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.css'
import Footer from './components/Footer.jsx'
import Header from './components/Header.jsx'
import CitiesSection from './components/CitiesSection.jsx'
import ContentSection from './components/ContentSection.jsx'

ReactDOM.createRoot(document.getElementById('header-section')).render(
  <React.StrictMode>
    <Header/>
  </React.StrictMode>,
)

ReactDOM.createRoot(document.getElementById('cities')).render(
  <React.StrictMode>
    <CitiesSection/>
  </React.StrictMode>,
)

ReactDOM.createRoot(document.getElementById('about')).render(
  <React.StrictMode>
    <ContentSection/>
  </React.StrictMode>,
)

ReactDOM.createRoot(document.getElementById('footer')).render(
  <React.StrictMode>
    <Footer/>
  </React.StrictMode>,
)

