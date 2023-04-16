import { useEffect } from 'react'
import { Route, Routes, useNavigate } from 'react-router-dom'
import App from './App'

const AppRoutes = () => {
  return (
    <Routes>
      <Route element={<App />} path='/' />
      <Route element={<NoMatch />} path='*' />
    </Routes>
  )
}

const NoMatch = () => {
  const navigate = useNavigate()

  useEffect(() => {
    navigate('/')
  })

  return <>No match</>
}

export default AppRoutes
