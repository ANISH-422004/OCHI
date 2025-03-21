import React from 'react'
import NavBar from './components/NavBar'
import LandPage from './components/LandPage'
import Marquee from './components/Marquee'
import About from './components/About'
import Eyes from './components/Eyes'

const App = () => {
  return (
    <div className='w-full min-h-screen bg-zinc-900 text-white'>
      <NavBar/>
      <LandPage/>
      <Marquee/>
      <About/>
      <Eyes/>
    </div>
  )
}

export default App