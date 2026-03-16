import React from 'react'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Index from './pages/Index'
import AddStudent from './pages/AddStudent'

const App = () => {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Index/>}  />
      <Route path='/add' element={<AddStudent/>} />
    </Routes>
    </BrowserRouter>
  )
}

export default App