import { Route, Routes } from 'react-router-dom'
import Home from './pages/home/Home'

function App() {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/chat' element={<Home />} />
    </Routes>
  )
}

export default App
