import React from 'react'
import './Dashbord.css';
import userimg from '../../Asserts/Images/userimg.svg'
import dashlogo from '../../Asserts/Images/dashlogo.png'

export default function Navbar({ showtask }) {
  return (
    <>
      <div className='dmain'>
        <div className='dimg1'><img src={dashlogo} alt="img" /></div>
        <div className='ddas'>DashBoard</div>
        <div className='ser'><input type='serch' placeholder='Search here'></input>
          <svg xmlns="http://www.w3.org/2000/svg" width="30" height="40" viewBox="0 0 52 51" fill="none">
            <path d="M33.0955 32.3555L39.4236 38.6836" stroke="#252525" stroke-width="3.16406" stroke-linecap="round" stroke-linejoin="round" />
            <path d="M25.1853 34.4648C30.7189 34.4648 35.2048 29.9789 35.2048 24.4453C35.2048 18.9117 30.7189 14.4258 25.1853 14.4258C19.6517 14.4258 15.1658 18.9117 15.1658 24.4453C15.1658 29.9789 19.6517 34.4648 25.1853 34.4648Z" stroke="#252525" stroke-width="3.16406" stroke-linecap="round" stroke-linejoin="round" />
          </svg>
        </div>
        <div className='star' onClick={showtask}><span className='dic'><svg xmlns="http://www.w3.org/2000/svg" width="47" height="45" viewBox="0 0 47 45" fill="none">
          <rect x="1.27643" width="35" height="35" rx="22.5" fill="#F9F9F9" />
          <path d="M31.8176 22.5001L23.3801 22.5001M23.3801 22.5001L14.9426 22.5001M23.3801 22.5001L23.3801 14.0625M23.3801 22.5001L23.3801 30.9375" stroke="#2BAC76" stroke-width="2.8125" stroke-linecap="round" />
        </svg> </span><span className='project'>Start Project</span></div>
        <div className='dani'>
          <div className='name'>Daniyal<br /><span className='da'>@dany19</span></div>
          <div className='dimgd'><img src={userimg} alt="" /></div>
          <div className='noti'>
            <div></div>
            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 31 31" fill="none">
              <path fill-rule="evenodd" clip-rule="evenodd" d="M15.5032 22.7127C22.4588 22.7127 25.6766 21.8204 25.9874 18.2388C25.9874 14.6598 23.7439 14.8899 23.7439 10.4986C23.7439 7.06845 20.4927 3.16571 15.5032 3.16571C10.5137 3.16571 7.26248 7.06845 7.26248 10.4986C7.26248 14.8899 5.01906 14.6598 5.01906 18.2388C5.33106 21.8339 8.54885 22.7127 15.5032 22.7127Z" stroke="#363F5E" stroke-width="2.10938" stroke-linecap="round" stroke-linejoin="round" />
              <path d="M18.4496 26.4247C16.767 28.293 14.1423 28.3152 12.4436 26.4247" stroke="#363F5E" stroke-width="2.10938" stroke-linecap="round" stroke-linejoin="round" />
            </svg></div>
        </div>
      </div>
    </>
  )
}
