import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import HomePage from '../pages/landing_page/LandingPage'
import '../assects/scss/Style.css'

const Main = () => {
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path="" element={ <HomePage/> }/>
    </Routes>
    </BrowserRouter>
      
    </>
  )
}

export default Main