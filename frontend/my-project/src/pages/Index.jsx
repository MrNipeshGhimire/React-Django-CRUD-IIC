import React from 'react'
import { Link } from 'react-router-dom'
import AddStudent from './AddStudent'

const Index = () => {
  return (
    <>
    <div>This is index page</div>
    <p>HEllo world</p>
    
 <div className="flex items-center justify-center h-screen">
      <h1 className="text-4xl font-bold text-blue-500">
        Tailwind v3 Working 🚀
      </h1>
      <Link to={"/add"}>Add Student</Link>
    </div>


    </>
 
  )
}

export default Index