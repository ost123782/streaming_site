import { BrowserRouter, Route, Routes } from 'react-router-dom'
import HomePage from './pages/HomePage/HomePage'
import Layout from './layouts/Layout/Layout.tsx'
import AdminPage from './pages/AdminPage/AdminPage.tsx'

function App() { 
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage/>}/>
          <Route path="about" element={<h1>yes</h1>}/>
          <Route path="/admin">
              <Route index element={<AdminPage/>}/>
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
