import React, { useEffect } from 'react'
import Navbar from './components/Navbar'
import Landing from './pages/Landing'
import {Routes, Route} from 'react-router-dom'
import Login from './pages/Login'
import Signup from './pages/Signup'
import userAuthStore from './stores/userAuthStore'
import Dashboard from './pages/Dashboard'
import Upload from './pages/Upload'
import Profile from './pages/Profile'



const App = () => {
  const {user, checkAuth} = userAuthStore()
  
  useEffect(() => {
    checkAuth()

  }, [checkAuth])

  console.log(user)
  return (
    <Routes >
      
      <Route path='/' element={user ? <Dashboard user={user}/> : <Landing />} />
      <Route path='/login' element={!user ? <Login /> : <Dashboard user={user} />} />
      <Route path='/dashboard' element={user ? <Dashboard user={user} />:<Landing user={user}/>} />
      <Route path='/upload' element={user ? <Upload user={user}/>:<Landing />} />
      <Route path='/profile' element={user ? <Profile user={user}/>:<Landing />} />
      <Route path='/signup' element={!user ? <Signup /> : <Dashboard user={user} />} />

    </Routes>
  )
}

export default App