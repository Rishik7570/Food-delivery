import { useState } from 'react'
import './Login_pop_up.css'
import { assets } from '../../Assets/frontend_assets/Data'

interface loginprops {
  setshowLogin: React.Dispatch<React.SetStateAction<boolean>>
}



const Login_pop_up:React.FC<loginprops> = ({setshowLogin}) => {
  const[signup,setsignup] = useState('Login')



  return (
    <div className='loginpopup'>
      <form action="" className="login-popup-container">
        <div className="loginpopup-title">
          <h2>{signup}</h2>
          <img onClick={()=>setshowLogin(false)} src={assets.cross_icon} alt="" />
        </div>
          <div className="login-inputs">
            {signup=='Login'?<></>:<input type="text" placeholder='Your name' required />}
            <input type="text" placeholder='Your email' required />
            <input type="password" placeholder='Password' required />
          </div>
        <button>{signup=='Sign Up'?"Create account":"Login"}</button>
        <div className="loginpopup-condition">
          <input type="checkbox" required/>
          <p>By continuing, I agree to terms of use and privacy policy</p>
        </div>
        {signup=='Login'?
        <p>Create new account? <span onClick={()=>setsignup('Sign Up')}>Click here</span></p>:
        <p>Already have an account? <span onClick={()=>setsignup('Login')}>Login here</span></p>} 
      </form>
    </div>
  )
}

export default Login_pop_up
