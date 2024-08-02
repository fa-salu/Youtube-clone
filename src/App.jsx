import React from 'react'
import './App.css'
import Main from './Pages/Main'
import { Route, Routes } from 'react-router-dom'
import VideoPlay from './Pages/VideoPlay'

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/videoplay/:id" element={<VideoPlay />} />
      </Routes>
    </div>
  )
}

export default App
