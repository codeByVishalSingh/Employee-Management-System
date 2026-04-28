
import { useEffect, useState } from 'react'
import './App.css'
import Login from './components/Auth/Login'
import AdminDashborad from './Components/Dashboard/AdminDashboard'
import EmployeeDashboard from './Components/Dashboard/EmployeeDashboard'
import { getLocalStorage, setLocalStorage } from './Utils/LocalStorage'
  


function App() {
  const [user, setUser]=useState(null)

  const handleLogin = (email,password)=>{
    if(email == 'admin@gmail.com'&& password =='123'){
      console.log("this is admin");
      
    }
    else if(email == 'user@gmail.com'&& password =='123'){
      console.log("this is User");
      
    }
    else{
      alert("Invaild User ")
    }
                    
  }
  
  // useEffect(()=>{
  //   setLocalStorage()
  //   getLocalStorage()
  // },)
  return (
    <>
     
        { !user ? <Login handleLogin={handleLogin}></Login> : ''}
     { user =='admin'? <AdminDashborad /> : <EmployeeDashboard /> }
          

    </>

  )
}

export default App
