import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Navbar } from './Components/Navbar'
import { TitleBox } from './Components/TitleBox'

function App() {
 

  return (
   <div>
    <Navbar/>
    <TitleBox/>
   </div>
  )
}

export default App
