import { useState } from 'react'

type obj = {
  showRegisterPage: VoidFunction
}
type obj2 ={
  showLoginPage: VoidFunction
}

const Auth = () => {

  const [showRegister, setShowRegister] = useState(false);
  const showRegisterPage = () => {
    setShowRegister(true);
  }
  const showLoginPage = () => {
    setShowRegister(false);
  }

  return (
    <div>
      {!showRegister && <Login showRegisterPage = {showRegisterPage} />}
      {showRegister && <Register showLoginPage={showLoginPage} /> }
    </div>
  )
}

export default Auth

const Login = ({ showRegisterPage}: obj) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  // const [showRegister, setShowRegister] = useState(false);
  // const showRegisterPage = () => {
  //   setShowRegister(true);
  // }
  return (
    
      <div className='flex flex-col items-center'>
        {/* Login Page */}
 
        <form className='flex flex-col gap-5 mt-10'>

          <h1 className='text-2xl'>Welcome Back!</h1>

          <div>
          <label htmlFor='username'>Username</label>
          <input type="text" 
          id='username' 
          value={username} 
          onChange= {(e)=>{setUsername(e.target.value)}} 
          className='border border-black rounded-none px-0.5 ml-1'></input>
          </div>
          <div>
          <label htmlFor='password'>Password</label>
          <input type="text"
          id="password" 
          value={password} 
          onChange={(e)=>{setPassword(e.target.value)}}
          className='border border-black rounded-none px-0.5 ml-1'></input>
          </div>

        </form>
        <h2 className='mt-5'> Don't have an account?  {""}
        <button 
        onClick={showRegisterPage} 
        className='cursor-pointer text-blue-950 font-medium'
        >  Register </button> </h2>
      
    </div>

  )
}

const Register = ({showLoginPage}: obj2) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className='flex flex-col items-center'>
        {/* Login Page */}
 
        <form className='flex flex-col gap-5 mt-10'>

          <h1 className='text-2xl'>Create a new Account</h1>

          <div>
          <label htmlFor='username'>Username</label>
          <input type="text" 
          id='username' 
          value={username} 
          onChange= {(e)=>{setUsername(e.target.value)}} 
          className='border border-black rounded-none px-0.5 ml-1'></input>
          </div>
          <div>
          <label htmlFor='password'>Password</label>
          <input type="text"
          id="password" 
          value={password} 
          onChange={(e)=>{setPassword(e.target.value)}}
          className='border border-black rounded-none px-0.5 ml-1'></input>
          </div>

        </form>
        <h2 className='mt-5'> Already have an Account?  {""}
        <button 
        onClick={showLoginPage} 
        className='cursor-pointer text-blue-950 font-medium'
        >  Login </button> </h2>
      
    </div>
  )
}