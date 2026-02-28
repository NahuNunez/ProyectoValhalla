//import { useState } from 'react'
//import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router'
import Home from './components/pages/home.jsx'

function App() {
  /* const [count, setCount] = useState(0)
  console.log(`Veces tocado el boton ${count}`); */

  {/* <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p> */}
  

  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home/>} />
    </Routes>
    </BrowserRouter>
  )
}

export default App



