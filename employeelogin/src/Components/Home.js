import React from 'react'
import { useNavigate } from 'react-router-dom';


const Home = () => {
  const navigation = useNavigate();



 const empObj=JSON.parse(localStorage.getItem('empDetails'));
  return (
     <section>
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

      <button onClick={() => {navigation ('/login')}}>Logout</button>
      
  
      </form>
      </div>
      </div>
      
    </section> 
  )
}

export default Home