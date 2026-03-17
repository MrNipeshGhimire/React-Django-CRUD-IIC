import React from 'react'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Index from './pages/Index'
import AddStudent from './pages/AddStudent'
import EditStudent from './pages/EditStudent'

const App = () => {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Index/>}  />
      <Route path='/add' element={<AddStudent/>} />
      <Route path='/edit' element={<EditStudent/>} />
    </Routes>
    </BrowserRouter>
  )
}

export default App