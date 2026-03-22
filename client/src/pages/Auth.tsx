import axios from 'axios'
import { useState } from 'react'
import Cookies from "js-cookie";

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

const Login = ({ showRegisterPage }: obj) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  // const [showRegister, setShowRegister] = useState(false);
  // const showRegisterPage = () => {
  //   setShowRegister(true);
  // }
  const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
    setLoading(true);
    e.preventDefault();
     try{
     const res =  await axios.post("http://localhost:3000/auth/login", {
      username, password
    });
    setLoading(false);
    console.log(res.data);
    setError(false);
    const token = res.data.token;
    Cookies.set("token", token);
   
    }

    catch(err){
      setLoading(false);
      console.log("Failed");
      setError(true);     
    }   
  }

  return (
    
      <div className='flex flex-col items-center'>
        {/* Login Page */}
 
        <form className='flex flex-col gap-5 mt-10' onSubmit={handleLogin}>

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

          <div className='flex flex-col items-center justify-center mt-6'>
            {loading && <div className='text-gray-900 font-mono'> Wait a moment... </div> }
            {error && <div className='text-red-700 mb-3'> Username or Password Incorrect! </div>}
            <button className='cursor-pointer text-amber-50 bg-gray-900 py-1 px-5 rounded-md' type="submit">Login</button>
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
  const [error, setError] = useState(false);

  const onRegister = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    try{
      const response = await axios.post("http://localhost:3000/auth/register", {
      username, password
    })
    console.log(response.data)
    }
    catch(err){
      setError(true);
    }

  }

  return (
    <div className='flex flex-col items-center'>
        {/* Register Page */}
 
        <form className='flex flex-col gap-5 mt-10' onSubmit={onRegister}>

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

          <div className='flex flex-col items-center justify-center mt-6'>
            {error && <div className='text-gray-950 mb-3'> Username already exists. Try a different one </div>}
            <button className='cursor-pointer text-amber-50 bg-gray-900 py-1 px-5 rounded-md' type="submit">Register</button>
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