import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Header.jsx'
import MemeForm from './components/MemeForm.jsx'

function App() {
  
  return (
    <main>
      <Header />
      <MemeForm />
    </main>
  )
}

export default App
