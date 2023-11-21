import React, { useState } from 'react'

import Navbar from './Navbar';
import Sidebar from './Sidebar';
// import Card from './Card';
import Sidee from './Sidee';
import Overdue from './Overdue';
import Compleate from './Compleate';
import Inprogress from './Inprogress';
import Waiting from './Waiting';
import Task from '../Taskpop/Task';
import Chat from '../Chat/Chat';
// import File from '../Filesmembers/File';
import { Outlet } from 'react-router-dom';
export default function Dashboard() {

  const [task ,Settask] = useState(false);
  const [chat ,SetChat] = useState(false);
  // const [setting ,SetSetting] = useState(false);

  const showtask = ()=>{
    Settask(!task);
  }
 
  const showchat = ()=>{
    SetChat(!chat);
  }

  // const showsetting = ()=>{
  //   SetSetting(!setting);
  // }
  return (
    <>

      <Navbar showtask={showtask} />
      <div className='na'>
        <div className='slider'>
          {/* <Sidebar showsetting={showsetting} /> */}
          <Sidebar/>
          </div>

        <div className='maicard'>
          <div className='cards'>
            <Inprogress chat={showchat} />
            <Waiting  chat={showchat}/>
            <Compleate chat={showchat}/>
            <Overdue chat={showchat}/>

          </div>

        </div>
        <div className='side2'><Sidee /></div>
        {task && (
  <Task showtask={showtask} />
)}

{chat && (
  <Chat setchat={SetChat}/>
)}
<Outlet/>
{/* {setting && (
  <File/>
)} */}
      </div>
    </>
  )
}
