import { useState } from 'react'
import TopBar from './components/TopBar'
import Home from './components/Home'
import About from './components/About'
import Skills from './components/Skills'


function App() {
  return (
    <div style={{ display:'flex',flexDirection:'column',alignItems:'center',justifyContent:'center'}}>
      <TopBar />
      <Home />
      <About />
      <Skills />
    </div>
  )
}

export default App