import React,{useState} from 'react'
import './File.css'
import { NavLink, useNavigate } from 'react-router-dom';
import user from '../../Asserts/Images/cardimg.svg'
import { Icon } from '@iconify/react';

function File() {
  const navigate = useNavigate();
  const [showMoreUsers, setShowMoreUsers] = useState(false);

  const toggleShowMore = () => {
    setShowMoreUsers(!showMoreUsers);
  };

  const gotodashboard =()=>{
    navigate('/dashboard');
  }

  return (
    <>
      <div className="filemain">

        <div className="filecontainer">
          <div>Setting</div>
          <div id='navars'>
          <NavLink to="/dashboard/file">Files</NavLink>
            <NavLink to="/dashboard/members">Members</NavLink>
            <span className='crossicon' onClick={gotodashboard}><Icon icon="basil:cross-solid" /></span>
          </div>
          <div>
            <input type="serch" placeholder='Search here' />
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="25" viewBox="0 0 24 25" fill="none">
              <path d="M15.25 15.75L18.25 18.75" stroke="#252525" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
              <path d="M11.5 16.75C14.1234 16.75 16.25 14.6234 16.25 12C16.25 9.37665 14.1234 7.25 11.5 7.25C8.87665 7.25 6.75 9.37665 6.75 12C6.75 14.6234 8.87665 16.75 11.5 16.75Z" stroke="#252525" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
          </div>

          <div className="usershow2">

            <div className="userdiv2">
             <img src={user} alt="" /> <div id='username2'>FileName.pdf <br /> <span>Shared By Daniyal On 25th May 2022</span></div>
             <div id='icoon'><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
  <path d="M6.66671 3.99992H9.33337C9.33337 3.6463 9.1929 3.30716 8.94285 3.05711C8.6928 2.80706 8.35366 2.66659 8.00004 2.66659C7.64642 2.66659 7.30728 2.80706 7.05723 3.05711C6.80718 3.30716 6.66671 3.6463 6.66671 3.99992ZM5.33337 3.99992C5.33337 3.29267 5.61433 2.6144 6.11442 2.1143C6.61452 1.6142 7.2928 1.33325 8.00004 1.33325C8.70728 1.33325 9.38556 1.6142 9.88566 2.1143C10.3858 2.6144 10.6667 3.29267 10.6667 3.99992H14C14.1769 3.99992 14.3464 4.07016 14.4714 4.19518C14.5965 4.3202 14.6667 4.48977 14.6667 4.66658C14.6667 4.8434 14.5965 5.01297 14.4714 5.13799C14.3464 5.26301 14.1769 5.33325 14 5.33325H13.412L12.8214 12.2266C12.7646 12.8922 12.46 13.5123 11.9679 13.9641C11.4759 14.416 10.8321 14.6667 10.164 14.6666H5.83604C5.16798 14.6667 4.52422 14.416 4.03214 13.9641C3.54006 13.5123 3.23549 12.8922 3.17871 12.2266L2.58804 5.33325H2.00004C1.82323 5.33325 1.65366 5.26301 1.52864 5.13799C1.40361 5.01297 1.33337 4.8434 1.33337 4.66658C1.33337 4.48977 1.40361 4.3202 1.52864 4.19518C1.65366 4.07016 1.82323 3.99992 2.00004 3.99992H5.33337ZM10 7.99992C10 7.82311 9.9298 7.65354 9.80478 7.52851C9.67975 7.40349 9.51018 7.33325 9.33337 7.33325C9.15656 7.33325 8.98699 7.40349 8.86197 7.52851C8.73695 7.65354 8.66671 7.82311 8.66671 7.99992V10.6666C8.66671 10.8434 8.73695 11.013 8.86197 11.138C8.98699 11.263 9.15656 11.3333 9.33337 11.3333C9.51018 11.3333 9.67975 11.263 9.80478 11.138C9.9298 11.013 10 10.8434 10 10.6666V7.99992ZM6.66671 7.33325C6.84352 7.33325 7.01309 7.40349 7.13811 7.52851C7.26314 7.65354 7.33337 7.82311 7.33337 7.99992V10.6666C7.33337 10.8434 7.26314 11.013 7.13811 11.138C7.01309 11.263 6.84352 11.3333 6.66671 11.3333C6.4899 11.3333 6.32033 11.263 6.1953 11.138C6.07028 11.013 6.00004 10.8434 6.00004 10.6666V7.99992C6.00004 7.82311 6.07028 7.65354 6.1953 7.52851C6.32033 7.40349 6.4899 7.33325 6.66671 7.33325ZM4.50671 12.1133C4.53511 12.4462 4.68749 12.7563 4.93367 12.9823C5.17985 13.2082 5.50189 13.3335 5.83604 13.3333H10.164C10.498 13.3331 10.8197 13.2077 11.0656 12.9818C11.3115 12.7559 11.4637 12.446 11.492 12.1133L12.0734 5.33325H3.92671L4.50804 12.1133H4.50671Z" fill="#FF6059"/>
</svg></div>
            </div>

            <div className="userdiv2">
             <img src={user} alt="" /> <div id='username2'>FileName.pdf <br /> <span>Shared By Daniyal On 25th May 2022</span></div>
             <div id='icoon'><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
  <path d="M6.66671 3.99992H9.33337C9.33337 3.6463 9.1929 3.30716 8.94285 3.05711C8.6928 2.80706 8.35366 2.66659 8.00004 2.66659C7.64642 2.66659 7.30728 2.80706 7.05723 3.05711C6.80718 3.30716 6.66671 3.6463 6.66671 3.99992ZM5.33337 3.99992C5.33337 3.29267 5.61433 2.6144 6.11442 2.1143C6.61452 1.6142 7.2928 1.33325 8.00004 1.33325C8.70728 1.33325 9.38556 1.6142 9.88566 2.1143C10.3858 2.6144 10.6667 3.29267 10.6667 3.99992H14C14.1769 3.99992 14.3464 4.07016 14.4714 4.19518C14.5965 4.3202 14.6667 4.48977 14.6667 4.66658C14.6667 4.8434 14.5965 5.01297 14.4714 5.13799C14.3464 5.26301 14.1769 5.33325 14 5.33325H13.412L12.8214 12.2266C12.7646 12.8922 12.46 13.5123 11.9679 13.9641C11.4759 14.416 10.8321 14.6667 10.164 14.6666H5.83604C5.16798 14.6667 4.52422 14.416 4.03214 13.9641C3.54006 13.5123 3.23549 12.8922 3.17871 12.2266L2.58804 5.33325H2.00004C1.82323 5.33325 1.65366 5.26301 1.52864 5.13799C1.40361 5.01297 1.33337 4.8434 1.33337 4.66658C1.33337 4.48977 1.40361 4.3202 1.52864 4.19518C1.65366 4.07016 1.82323 3.99992 2.00004 3.99992H5.33337ZM10 7.99992C10 7.82311 9.9298 7.65354 9.80478 7.52851C9.67975 7.40349 9.51018 7.33325 9.33337 7.33325C9.15656 7.33325 8.98699 7.40349 8.86197 7.52851C8.73695 7.65354 8.66671 7.82311 8.66671 7.99992V10.6666C8.66671 10.8434 8.73695 11.013 8.86197 11.138C8.98699 11.263 9.15656 11.3333 9.33337 11.3333C9.51018 11.3333 9.67975 11.263 9.80478 11.138C9.9298 11.013 10 10.8434 10 10.6666V7.99992ZM6.66671 7.33325C6.84352 7.33325 7.01309 7.40349 7.13811 7.52851C7.26314 7.65354 7.33337 7.82311 7.33337 7.99992V10.6666C7.33337 10.8434 7.26314 11.013 7.13811 11.138C7.01309 11.263 6.84352 11.3333 6.66671 11.3333C6.4899 11.3333 6.32033 11.263 6.1953 11.138C6.07028 11.013 6.00004 10.8434 6.00004 10.6666V7.99992C6.00004 7.82311 6.07028 7.65354 6.1953 7.52851C6.32033 7.40349 6.4899 7.33325 6.66671 7.33325ZM4.50671 12.1133C4.53511 12.4462 4.68749 12.7563 4.93367 12.9823C5.17985 13.2082 5.50189 13.3335 5.83604 13.3333H10.164C10.498 13.3331 10.8197 13.2077 11.0656 12.9818C11.3115 12.7559 11.4637 12.446 11.492 12.1133L12.0734 5.33325H3.92671L4.50804 12.1133H4.50671Z" fill="#FF6059"/>
</svg></div>
            </div>

            <div className="userdiv2">
             <img src={user} alt="" /> <div id='username2'>FileName.pdf <br /> <span>Shared By Daniyal On 25th May 2022</span></div>
             <div id='icoon'><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
  <path d="M6.66671 3.99992H9.33337C9.33337 3.6463 9.1929 3.30716 8.94285 3.05711C8.6928 2.80706 8.35366 2.66659 8.00004 2.66659C7.64642 2.66659 7.30728 2.80706 7.05723 3.05711C6.80718 3.30716 6.66671 3.6463 6.66671 3.99992ZM5.33337 3.99992C5.33337 3.29267 5.61433 2.6144 6.11442 2.1143C6.61452 1.6142 7.2928 1.33325 8.00004 1.33325C8.70728 1.33325 9.38556 1.6142 9.88566 2.1143C10.3858 2.6144 10.6667 3.29267 10.6667 3.99992H14C14.1769 3.99992 14.3464 4.07016 14.4714 4.19518C14.5965 4.3202 14.6667 4.48977 14.6667 4.66658C14.6667 4.8434 14.5965 5.01297 14.4714 5.13799C14.3464 5.26301 14.1769 5.33325 14 5.33325H13.412L12.8214 12.2266C12.7646 12.8922 12.46 13.5123 11.9679 13.9641C11.4759 14.416 10.8321 14.6667 10.164 14.6666H5.83604C5.16798 14.6667 4.52422 14.416 4.03214 13.9641C3.54006 13.5123 3.23549 12.8922 3.17871 12.2266L2.58804 5.33325H2.00004C1.82323 5.33325 1.65366 5.26301 1.52864 5.13799C1.40361 5.01297 1.33337 4.8434 1.33337 4.66658C1.33337 4.48977 1.40361 4.3202 1.52864 4.19518C1.65366 4.07016 1.82323 3.99992 2.00004 3.99992H5.33337ZM10 7.99992C10 7.82311 9.9298 7.65354 9.80478 7.52851C9.67975 7.40349 9.51018 7.33325 9.33337 7.33325C9.15656 7.33325 8.98699 7.40349 8.86197 7.52851C8.73695 7.65354 8.66671 7.82311 8.66671 7.99992V10.6666C8.66671 10.8434 8.73695 11.013 8.86197 11.138C8.98699 11.263 9.15656 11.3333 9.33337 11.3333C9.51018 11.3333 9.67975 11.263 9.80478 11.138C9.9298 11.013 10 10.8434 10 10.6666V7.99992ZM6.66671 7.33325C6.84352 7.33325 7.01309 7.40349 7.13811 7.52851C7.26314 7.65354 7.33337 7.82311 7.33337 7.99992V10.6666C7.33337 10.8434 7.26314 11.013 7.13811 11.138C7.01309 11.263 6.84352 11.3333 6.66671 11.3333C6.4899 11.3333 6.32033 11.263 6.1953 11.138C6.07028 11.013 6.00004 10.8434 6.00004 10.6666V7.99992C6.00004 7.82311 6.07028 7.65354 6.1953 7.52851C6.32033 7.40349 6.4899 7.33325 6.66671 7.33325ZM4.50671 12.1133C4.53511 12.4462 4.68749 12.7563 4.93367 12.9823C5.17985 13.2082 5.50189 13.3335 5.83604 13.3333H10.164C10.498 13.3331 10.8197 13.2077 11.0656 12.9818C11.3115 12.7559 11.4637 12.446 11.492 12.1133L12.0734 5.33325H3.92671L4.50804 12.1133H4.50671Z" fill="#FF6059"/>
</svg></div>
            </div>

            {showMoreUsers && (
                <div className="userdiv2">
                <img src={user} alt="" /> <div id='username2'>FileName.pdf <br /> <span>Shared By Daniyal On 25th May 2022</span></div>
                <div id='icoon'><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
     <path d="M6.66671 3.99992H9.33337C9.33337 3.6463 9.1929 3.30716 8.94285 3.05711C8.6928 2.80706 8.35366 2.66659 8.00004 2.66659C7.64642 2.66659 7.30728 2.80706 7.05723 3.05711C6.80718 3.30716 6.66671 3.6463 6.66671 3.99992ZM5.33337 3.99992C5.33337 3.29267 5.61433 2.6144 6.11442 2.1143C6.61452 1.6142 7.2928 1.33325 8.00004 1.33325C8.70728 1.33325 9.38556 1.6142 9.88566 2.1143C10.3858 2.6144 10.6667 3.29267 10.6667 3.99992H14C14.1769 3.99992 14.3464 4.07016 14.4714 4.19518C14.5965 4.3202 14.6667 4.48977 14.6667 4.66658C14.6667 4.8434 14.5965 5.01297 14.4714 5.13799C14.3464 5.26301 14.1769 5.33325 14 5.33325H13.412L12.8214 12.2266C12.7646 12.8922 12.46 13.5123 11.9679 13.9641C11.4759 14.416 10.8321 14.6667 10.164 14.6666H5.83604C5.16798 14.6667 4.52422 14.416 4.03214 13.9641C3.54006 13.5123 3.23549 12.8922 3.17871 12.2266L2.58804 5.33325H2.00004C1.82323 5.33325 1.65366 5.26301 1.52864 5.13799C1.40361 5.01297 1.33337 4.8434 1.33337 4.66658C1.33337 4.48977 1.40361 4.3202 1.52864 4.19518C1.65366 4.07016 1.82323 3.99992 2.00004 3.99992H5.33337ZM10 7.99992C10 7.82311 9.9298 7.65354 9.80478 7.52851C9.67975 7.40349 9.51018 7.33325 9.33337 7.33325C9.15656 7.33325 8.98699 7.40349 8.86197 7.52851C8.73695 7.65354 8.66671 7.82311 8.66671 7.99992V10.6666C8.66671 10.8434 8.73695 11.013 8.86197 11.138C8.98699 11.263 9.15656 11.3333 9.33337 11.3333C9.51018 11.3333 9.67975 11.263 9.80478 11.138C9.9298 11.013 10 10.8434 10 10.6666V7.99992ZM6.66671 7.33325C6.84352 7.33325 7.01309 7.40349 7.13811 7.52851C7.26314 7.65354 7.33337 7.82311 7.33337 7.99992V10.6666C7.33337 10.8434 7.26314 11.013 7.13811 11.138C7.01309 11.263 6.84352 11.3333 6.66671 11.3333C6.4899 11.3333 6.32033 11.263 6.1953 11.138C6.07028 11.013 6.00004 10.8434 6.00004 10.6666V7.99992C6.00004 7.82311 6.07028 7.65354 6.1953 7.52851C6.32033 7.40349 6.4899 7.33325 6.66671 7.33325ZM4.50671 12.1133C4.53511 12.4462 4.68749 12.7563 4.93367 12.9823C5.17985 13.2082 5.50189 13.3335 5.83604 13.3333H10.164C10.498 13.3331 10.8197 13.2077 11.0656 12.9818C11.3115 12.7559 11.4637 12.446 11.492 12.1133L12.0734 5.33325H3.92671L4.50804 12.1133H4.50671Z" fill="#FF6059"/>
   </svg></div>
               </div>
            )}

            {showMoreUsers && (
                <div className="userdiv2">
                <img src={user} alt="" /> <div id='username2'>FileName.pdf <br /> <span>Shared By Daniyal On 25th May 2022</span></div>
                <div id='icoon'><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
     <path d="M6.66671 3.99992H9.33337C9.33337 3.6463 9.1929 3.30716 8.94285 3.05711C8.6928 2.80706 8.35366 2.66659 8.00004 2.66659C7.64642 2.66659 7.30728 2.80706 7.05723 3.05711C6.80718 3.30716 6.66671 3.6463 6.66671 3.99992ZM5.33337 3.99992C5.33337 3.29267 5.61433 2.6144 6.11442 2.1143C6.61452 1.6142 7.2928 1.33325 8.00004 1.33325C8.70728 1.33325 9.38556 1.6142 9.88566 2.1143C10.3858 2.6144 10.6667 3.29267 10.6667 3.99992H14C14.1769 3.99992 14.3464 4.07016 14.4714 4.19518C14.5965 4.3202 14.6667 4.48977 14.6667 4.66658C14.6667 4.8434 14.5965 5.01297 14.4714 5.13799C14.3464 5.26301 14.1769 5.33325 14 5.33325H13.412L12.8214 12.2266C12.7646 12.8922 12.46 13.5123 11.9679 13.9641C11.4759 14.416 10.8321 14.6667 10.164 14.6666H5.83604C5.16798 14.6667 4.52422 14.416 4.03214 13.9641C3.54006 13.5123 3.23549 12.8922 3.17871 12.2266L2.58804 5.33325H2.00004C1.82323 5.33325 1.65366 5.26301 1.52864 5.13799C1.40361 5.01297 1.33337 4.8434 1.33337 4.66658C1.33337 4.48977 1.40361 4.3202 1.52864 4.19518C1.65366 4.07016 1.82323 3.99992 2.00004 3.99992H5.33337ZM10 7.99992C10 7.82311 9.9298 7.65354 9.80478 7.52851C9.67975 7.40349 9.51018 7.33325 9.33337 7.33325C9.15656 7.33325 8.98699 7.40349 8.86197 7.52851C8.73695 7.65354 8.66671 7.82311 8.66671 7.99992V10.6666C8.66671 10.8434 8.73695 11.013 8.86197 11.138C8.98699 11.263 9.15656 11.3333 9.33337 11.3333C9.51018 11.3333 9.67975 11.263 9.80478 11.138C9.9298 11.013 10 10.8434 10 10.6666V7.99992ZM6.66671 7.33325C6.84352 7.33325 7.01309 7.40349 7.13811 7.52851C7.26314 7.65354 7.33337 7.82311 7.33337 7.99992V10.6666C7.33337 10.8434 7.26314 11.013 7.13811 11.138C7.01309 11.263 6.84352 11.3333 6.66671 11.3333C6.4899 11.3333 6.32033 11.263 6.1953 11.138C6.07028 11.013 6.00004 10.8434 6.00004 10.6666V7.99992C6.00004 7.82311 6.07028 7.65354 6.1953 7.52851C6.32033 7.40349 6.4899 7.33325 6.66671 7.33325ZM4.50671 12.1133C4.53511 12.4462 4.68749 12.7563 4.93367 12.9823C5.17985 13.2082 5.50189 13.3335 5.83604 13.3333H10.164C10.498 13.3331 10.8197 13.2077 11.0656 12.9818C11.3115 12.7559 11.4637 12.446 11.492 12.1133L12.0734 5.33325H3.92671L4.50804 12.1133H4.50671Z" fill="#FF6059"/>
   </svg></div>
               </div>
            )}

            {showMoreUsers && (
                <div className="userdiv2">
                <img src={user} alt="" /> <div id='username2'>FileName.pdf <br /> <span>Shared By Daniyal On 25th May 2022</span></div>
                <div id='icoon'><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
     <path d="M6.66671 3.99992H9.33337C9.33337 3.6463 9.1929 3.30716 8.94285 3.05711C8.6928 2.80706 8.35366 2.66659 8.00004 2.66659C7.64642 2.66659 7.30728 2.80706 7.05723 3.05711C6.80718 3.30716 6.66671 3.6463 6.66671 3.99992ZM5.33337 3.99992C5.33337 3.29267 5.61433 2.6144 6.11442 2.1143C6.61452 1.6142 7.2928 1.33325 8.00004 1.33325C8.70728 1.33325 9.38556 1.6142 9.88566 2.1143C10.3858 2.6144 10.6667 3.29267 10.6667 3.99992H14C14.1769 3.99992 14.3464 4.07016 14.4714 4.19518C14.5965 4.3202 14.6667 4.48977 14.6667 4.66658C14.6667 4.8434 14.5965 5.01297 14.4714 5.13799C14.3464 5.26301 14.1769 5.33325 14 5.33325H13.412L12.8214 12.2266C12.7646 12.8922 12.46 13.5123 11.9679 13.9641C11.4759 14.416 10.8321 14.6667 10.164 14.6666H5.83604C5.16798 14.6667 4.52422 14.416 4.03214 13.9641C3.54006 13.5123 3.23549 12.8922 3.17871 12.2266L2.58804 5.33325H2.00004C1.82323 5.33325 1.65366 5.26301 1.52864 5.13799C1.40361 5.01297 1.33337 4.8434 1.33337 4.66658C1.33337 4.48977 1.40361 4.3202 1.52864 4.19518C1.65366 4.07016 1.82323 3.99992 2.00004 3.99992H5.33337ZM10 7.99992C10 7.82311 9.9298 7.65354 9.80478 7.52851C9.67975 7.40349 9.51018 7.33325 9.33337 7.33325C9.15656 7.33325 8.98699 7.40349 8.86197 7.52851C8.73695 7.65354 8.66671 7.82311 8.66671 7.99992V10.6666C8.66671 10.8434 8.73695 11.013 8.86197 11.138C8.98699 11.263 9.15656 11.3333 9.33337 11.3333C9.51018 11.3333 9.67975 11.263 9.80478 11.138C9.9298 11.013 10 10.8434 10 10.6666V7.99992ZM6.66671 7.33325C6.84352 7.33325 7.01309 7.40349 7.13811 7.52851C7.26314 7.65354 7.33337 7.82311 7.33337 7.99992V10.6666C7.33337 10.8434 7.26314 11.013 7.13811 11.138C7.01309 11.263 6.84352 11.3333 6.66671 11.3333C6.4899 11.3333 6.32033 11.263 6.1953 11.138C6.07028 11.013 6.00004 10.8434 6.00004 10.6666V7.99992C6.00004 7.82311 6.07028 7.65354 6.1953 7.52851C6.32033 7.40349 6.4899 7.33325 6.66671 7.33325ZM4.50671 12.1133C4.53511 12.4462 4.68749 12.7563 4.93367 12.9823C5.17985 13.2082 5.50189 13.3335 5.83604 13.3333H10.164C10.498 13.3331 10.8197 13.2077 11.0656 12.9818C11.3115 12.7559 11.4637 12.446 11.492 12.1133L12.0734 5.33325H3.92671L4.50804 12.1133H4.50671Z" fill="#FF6059"/>
   </svg></div>
               </div>
            )}


          </div>
          {showMoreUsers ? (
            <div onClick={toggleShowMore}>Show Less</div>) : (
            <div onClick={toggleShowMore}>Show More</div>
          )}
          {/* <button onClick={handlePrevious}>Previous</button> */}
          <button>Save Changes</button>

        </div>



      </div>
    </>
  )
}

export default File;
