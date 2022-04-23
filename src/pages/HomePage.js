import React from 'react'
import NavBar from '../component/navbar/NavBar'

const HomePage = () => {
  return (
    <>
      <NavBar />
      <div className="section">
        <div className="bg-image">
          <img src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg" alt="" />
        </div>
      </div>
    </>
  )
}

export default HomePage