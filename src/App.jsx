import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import Nav from './components/Nav'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='max-w-[1440px] mx-auto font-["Poppins"]'>
        <Nav />
      </div>
    </>
  )
}

export default App
