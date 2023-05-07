import React, { useState } from 'react'
import Login from './Login';


const Registration = () => {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [mobile, setMobile] = useState("");
    const [flag, setFlag] = useState(false);
    const [login, setLogin] = useState(true);

    function handleSubmit(e) {
        e.preventDefault();
        
        if(!name || !email || !password || !mobile){
            
            setFlag(true);
        }
        else{
            setFlag(false);
            const employees = JSON.parse(localStorage.getItem('Employees')) || [];
            console.log('employees',employees)
            const employeeData = {eName:name,eEmail:email,eMobile:mobile,ePassword:password};
            console.log('employeeData',employeeData)

        
            employees.push(employeeData);
            console.log('employee after push',employees)
            localStorage.setItem("Employees", JSON.stringify(employees));

            console.log("Saved in local storage");
            setLogin(!login);
        }

    }
   

    function handleClick() {
        setLogin(!login);
    }
  return (
    <section>
    {login ? (
        <div className='form-box'>
          <div className='form-value'>
            <form onSubmit= {handleSubmit}>
            <h2>Register</h2>
            <div className="inputbox">
                
                <input type="text" placeholder='Name'
                onChange={(event) => setName(event.target.value)}/>
            </div>
            <div className="inputbox">
                
                <input type="text" placeholder='Email'
                onChange={(event) => setEmail(event.target.value)}/>
            </div>
            <div className="inputbox">
                
                <input type="password" placeholder='Password'
                onChange={(event) => setPassword(event.target.value)}/>
            </div>
            <div className="inputbox">
                
                <input type="number" placeholder='Mobile number'
                onChange={(event) => setMobile(event.target.value)}/>
            </div>
            <button>Register</button>


            <p onClick={handleClick}>Already registerd {""} login?</p>

            {flag && (
               <div className="alert alert-danger" role="alert">
               <strong>Please fill every FIELD</strong>
             </div>
            )}
            </form>
        </div>
        </div>
        ):(

        <Login/>
        )}
    </section>
  )
}

export default Registration