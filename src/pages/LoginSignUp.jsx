import React from 'react'
import './CSS/loginsignup.css'

const LoginSignUp = () => {
  return (
    <div className='loginsignup'>
      <div className="loginsignup-container">
        <h1>Sign Up</h1>
        <div className="loginsignup-feilds">
          <input type="text" placeholder='Your Name'/>
          <input type="email" placeholder='you Email' />
          <input type="password" placeholder='enter password'/>
        </div>
        <button>Continue</button>
        <p className="loginsignup-login">Already Have an Acoount <span>Login here</span></p>
        <div className="loginsignup-agree">
          <input type="checkbox" name=''  id=''/>
          <p>By continuing i agree to the terms of use & privacy policy</p>
        </div>
      </div>
    </div>
  )
}

export default LoginSignUp