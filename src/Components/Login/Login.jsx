import React, { useState } from 'react'
import './Login.css'
// images
import logo from '../../Asserts/Images/logo.svg'
import image from '../../Asserts/Images/login.svg'
// material ui icons
// import MailOutlineIcon from '@mui/icons-material/MailOutline';
// import LockOutlinedIcon from '@mui/icons-material/LockOutlined';

// iconify

import { Icon } from '@iconify/react';

import { NavLink, useNavigate } from 'react-router-dom'
import axios from 'axios';


function Login() {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const navigate = useNavigate();

  const handleCheckboxChange = () => {
    setShowPassword(!showPassword);
  };
  const signupdata = {
    email,
    password,
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post("http://localhost:5000/login", signupdata).then((res) => {
      alert('success')
    }).catch((err) => {
      alert("error" + err)
    })
    setPassword("")
    setEmail("")
  };

  const loginwithgoogle = () => {
    window.location.href = "http://localhost:3000/login"
  }

  const resetpasward = () => {
    navigate('/resetpasward')
  }

  return (
    <>
        <div className="mloginup">
        <div className="loginleft">
          <img className='loginlogo' src={logo} alt="" />
          <div><img src={image} alt="" /></div>
        </div>


        <div className="loginright">
          <div>

            <div className="sign">Sign-In.</div>
            <div className="enter">
              Kindly enter your credentials below to get<br />  access to your account.
            </div>
            <form onSubmit={handleSubmit}>
              <label className="emi">Email*</label><br />
              <div className="gmi11"> <Icon icon="clarity:email-line" />
              </div>

              <input
                type="email"
                placeholder="Enter Your Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <br />
              <label className="pas">Pasword*</label><br />
              <div className="gmi22"> <Icon icon="ion:lock-open-outline" />
              </div>

              <input
                type={showPassword ? 'text' : 'password'}
                placeholder="Enter Your Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <br />
              <div className="main0">
                <div className="ch1">
                  <div className="ch">
                    <input
                      checked={showPassword}
                      onChange={handleCheckboxChange}
                      type="checkbox"
                      style={{ "width": "18px", "height": "16px" }}
                    />
                  </div>
                  <div className="sho">Show pasword</div>
                </div>
                <div className="reset" onClick={resetpasward}>Reset pasword?</div>
              </div>



              <div className="but">
                <button type="submit">LOGIN</button>
              </div>
            </form>

            <div className='ore'>Or </div>

            <div className="google" onClick={loginwithgoogle}>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M21.8055 10.0415H21V10H12V14H17.6515C16.827 16.3285 14.6115 18 12 18C8.6865 18 6 15.3135 6 12C6 8.6865 8.6865 6 12 6C13.5295 6 14.921 6.577 15.9805 7.5195L18.809 4.691C17.023 3.0265 14.634 2 12 2C6.4775 2 2 6.4775 2 12C2 17.5225 6.4775 22 12 22C17.5225 22 22 17.5225 22 12C22 11.3295 21.931 10.675 21.8055 10.0415Z" fill="#FFC107" />
                <path d="M3.15302 7.3455L6.43851 9.755C7.32752 7.554 9.48052 6 12 6C13.5295 6 14.921 6.577 15.9805 7.5195L18.809 4.691C17.023 3.0265 14.634 2 12 2C8.15902 2 4.82802 4.1685 3.15302 7.3455Z" fill="#FF3D00" />
                <path d="M12 22C14.583 22 16.93 21.0115 18.7045 19.404L15.6095 16.785C14.5717 17.5742 13.3037 18.001 12 18C9.39897 18 7.19047 16.3415 6.35847 14.027L3.09747 16.5395C4.75247 19.778 8.11347 22 12 22Z" fill="#4CAF50" />
                <path d="M21.8055 10.0415H21V10H12V14H17.6515C17.2571 15.1082 16.5467 16.0766 15.608 16.7855L15.6095 16.7845L18.7045 19.4035C18.4855 19.6025 22 17 22 12C22 11.3295 21.931 10.675 21.8055 10.0415Z" fill="#1976D2" />
              </svg>

              Sign Up with Google
            </div>

            <div className="button">
              Don’t Have An Account Yet? <NavLink to="/signup"><span>SIGN-UP</span></NavLink>
            </div>
          </div>
        </div>

      </div>

    </>
  )
}

export default Login;