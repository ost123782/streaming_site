import { BrowserRouter, Route, Routes } from 'react-router-dom'
import HomePage from './pages/HomePage/HomePage'

function App() { 
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/">
          <Route index element={<HomePage/>}/>
          <Route path="about" element={<h1>yes</h1>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
