import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './Components/Header/Header'
import Shop from './Components/Shop/Shop'
import { ToastContainer } from 'react-toastify'
import Blog from './Components/Blog/Blog'

function App() {
  const [count, setCount] = useState(0)

  return (
      <div className="App bg-white">
          <ToastContainer />
          <Header></Header>
          <Shop></Shop>
          <Blog></Blog>
      </div>
  )
}

export default App
