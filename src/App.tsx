// import { useEffect, useState } from 'react'
import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from './pages/homePage/HomePage'

function App() {
  
  // const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<HomePage />} />
        {/* <Route path="home" element={<Login />} />
        <Route path="agenda" element={<Agenda />} />
        <Route path="onboarding" element={<OnBoarding />} />
        <Route path="*" element={<PageNotFound />} /> */}
      </Routes>
    </BrowserRouter>
  )
}

export default App
