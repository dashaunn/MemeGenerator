import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Header.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <body>
      <Header />
    </body>
  )
}

export default App