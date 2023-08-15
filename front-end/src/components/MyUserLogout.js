import React, { useEffect } from 'react'
import {Link} from 'react-router-dom'
export default function MyUserLogout() {
    
    const logout =()=>{
        localStorage.clear();
        document.getElementById("logout").click();
    }
    useEffect(() =>{
          logout()
    }, [])  
  return (
    <div>MyUserLogout linl
        <a href="/"><button id="logout"></button></a>
        
         </div>
  )
}
