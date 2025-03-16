import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

// Pages
import Home from './pages/Home'

// Components
import Nav from './components/Nav'

function App() {
  return (
    <>
      <div className='font-["Poppins"]'>
        <Nav />
        <Home />
      </div>
    </>
  )
}

export default App
