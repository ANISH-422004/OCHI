import React from 'react'
import NavBar from './components/NavBar'
import LandPage from './components/LandPage'

const App = () => {
  return (
    <div className='w-full h-screen bg-zinc-900 text-white'>
      <NavBar/>
      <LandPage/>
    </div>
  )
}

export default App