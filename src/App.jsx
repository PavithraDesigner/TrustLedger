import './App.css'
import HomeScreen from './HomeScreen'
import { Routes, Route } from 'react-router-dom'
import Register from './Register'

function App() {
  return (

     <Routes>
      <Route path='/' element={<HomeScreen />} />
      <Route path='/RegisterPage' element={<Register />} />
    </Routes>
  )
}

export default App
