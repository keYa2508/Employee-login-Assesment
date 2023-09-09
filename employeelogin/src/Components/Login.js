import React, { useState } from 'react'
import Home from './Home'
import Registration from './Registration';

const Login = () => {
    const[emailLog, setEmailLog] = useState("");
    const[passwordLog, setPasswordLog] = useState("");
    const[flag, setFlag] = useState(false);
    const[home, setHome] = useState(false);
    const [register, setRegister] = useState(false)

    const employeeList = JSON.parse(localStorage.getItem("Employees"));
    console.log('employeeList',employeeList)

    function handleLogin(e){
        e.preventDefault();
        

        if(!emailLog || !passwordLog){
            setFlag(true);
            
        }
        else{
            console.log("EmailLog",emailLog);
            const empObj = employeeList.filter((emp) => emp.eEmail === emailLog && emp.ePassword === passwordLog)
            console.log('empObj',empObj)
            if(empObj.length === 0){
                setFlag(true);
            }else{
                localStorage.setItem('empDetails', JSON.stringify(empObj[0]));
            setFlag(false);
            setHome(true);
            }
            }
        
    }

    const handleClick = () =>{
        setRegister(!register)
    }

   

  return (
    <section>
        {!home ? (!register ?
            <div  className='form-box'>
                <div className='form-value'>
        <form onSubmit={handleLogin}>
            <h2>Login</h2>
            <div className="inputbox">
                
                <input type="text"  placeholder='Email'
                onChange={(event) => setEmailLog(event.target.value)}/>
            </div>
            <div className="inputbox">
                
                <input type="password"  placeholder='Password'
                onChange={(event) => setPasswordLog(event.target.value)}/>
            </div>
            <button>Login</button>

            <p onClick={handleClick}>You are not registerd {""} login?</p>
            
            {flag && (
               <div className="alert alert-danger" role="alert">
               <strong>Please fill CORRECT info</strong>
             </div>
            )}

            </form>
            </div>
            </div>
            :<Registration/>)
            :(
                <Home/>
            )}
            
    </section>
  )
}

export default Login
