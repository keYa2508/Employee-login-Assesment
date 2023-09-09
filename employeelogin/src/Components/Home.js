import React, { useState } from 'react'
import Login from './Login';


const Home = () => {

  const[login, setLogin] = useState(false)

const handleClick = () => {
  setLogin(!login)
}

 const empObj=JSON.parse(localStorage.getItem('empDetails'));
  return (
     <section>
      {!login ?
      <div  className='form-box'>
      <div className='form-value'>
      <form>
        <div className='table'>
          Name : {empObj.eName}
        </div>
        <div className='table'>
          Email : {empObj.eEmail}
        </div>
        <div className='table'>
          Mobile Number : {empObj.eMobile}
        </div>

      <button onClick={handleClick}>Logout</button>
      
  
      </form>
      </div>
      </div> : <Login/>}
      
    </section> 
  )
}

export default Home
