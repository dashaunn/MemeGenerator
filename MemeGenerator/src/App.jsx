import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Header.jsx'
import MemeForm from './components/MemeForm.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <body>
      <Header />
      <MemeForm />
    </body>
  )
}

export default App
