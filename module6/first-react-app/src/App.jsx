import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Greeting from './components/Greeting'
import BigCats from './components/BigCats'

function App() {
  

  return (
    <>
     <Greeting name="Ayoung">
     <div>
      Here is a greeting message!
     </div>
     </Greeting>
     <BigCats></BigCats>
    </>
  )
}

export default App
