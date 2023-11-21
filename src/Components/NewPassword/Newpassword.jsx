import React from 'react'
import './Newpassword.css'

import logo from '../../Asserts/Images/logo.svg'
import newpassword from '../../Asserts/Images/newpassword.svg'

import { Icon } from '@iconify/react';

export default function Newpassword() {
  return (
    <>
        
        <div className="resmain">
<div className="newleft">
 <img className='reslogo' src={logo} alt="" />
 <div><img src={newpassword} alt="" /></div>
</div>

    <div className='newpass'> 
      <p>Done!</p>
      <h1>New Password</h1>
      <span>Let’s Create Your New Password</span>

        <div className='nepass'> 
        <label>Password</label>
     

      <div className='lockandinput'>
        <Icon className='passicon' icon="ion:lock-open-outline" />  
        <input type="text" placeholder='New Password' />
      </div>
      <div className='lockandinput'>
        <Icon className='passicon' icon="ion:lock-open-outline" />  
        <input type="text" placeholder='Confirm Password' />
      </div>

      <button>Verify</button>

    </div>
    </div>


  </div>


    </>
  )
}
