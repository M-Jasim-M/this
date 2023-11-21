import React, { useState} from 'react'
import './CreateWorkspace.css'
import logo from '../../Asserts/Images/logo.svg'
import cardimg from '../../Asserts/Images/cardimg.svg'
import group from '../../Asserts/Images/members.svg'
import {useNavigate} from 'react-router-dom'

function CreateWorkspace() {

    const navigate = useNavigate();

const creatework = ()=>{
navigate("/workspace")
}

    return (
        <>
            <div className="createwomain">
                <img className='createlogo' src={logo} alt="" />

                <div className="createcenter">
                    <div>Hi there, Welcome Back</div>
                    <div>Please Select Your Workspace, Thankyou!</div>
                    <div>Workspace:</div>

                    <div className="linedivs">
                    <div className='linediv'>
                        <input type="checkbox" />
                        <img src={cardimg } alt="" />
                        <div>
                        Brandora Workspace<br /><span><img src={group } alt="" />10+ Members</span>
                        </div>
                    </div>

                    <div className='linediv'>
                        <input type="checkbox" />
                        <img src={cardimg } alt="" />
                        <div>
                        Brandora Workspace<br /><span><img src={group } alt="" />10+ Members</span>
                        </div>
                    </div>
                    {/* for checkin over flow */}
                    <div className='linediv'>
                        <input type="checkbox" />
                        <img src={cardimg } alt="" />
                        <div>
                        Brandora Workspace<br /><span><img src={group } alt="" />10+ Members</span>
                        </div>
                    </div>
                    </div>


                    <div><button>Let’s go</button></div>

                    <div>OR</div>

                    <div onClick={creatework}> <svg xmlns="http://www.w3.org/2000/svg" width="16" height="17" viewBox="0 0 16 17" fill="none">
                        <path d="M8.5 3.25C8.5 3.05109 8.42098 2.86032 8.28033 2.71967C8.13968 2.57902 7.94891 2.5 7.75 2.5C7.55109 2.5 7.36032 2.57902 7.21967 2.71967C7.07902 2.86032 7 3.05109 7 3.25V7.5H2.75C2.55109 7.5 2.36032 7.57902 2.21967 7.71967C2.07902 7.86032 2 8.05109 2 8.25C2 8.44891 2.07902 8.63968 2.21967 8.78033C2.36032 8.92098 2.55109 9 2.75 9H7V13.25C7 13.4489 7.07902 13.6397 7.21967 13.7803C7.36032 13.921 7.55109 14 7.75 14C7.94891 14 8.13968 13.921 8.28033 13.7803C8.42098 13.6397 8.5 13.4489 8.5 13.25V9H12.75C12.9489 9 13.1397 8.92098 13.2803 8.78033C13.421 8.63968 13.5 8.44891 13.5 8.25C13.5 8.05109 13.421 7.86032 13.2803 7.71967C13.1397 7.57902 12.9489 7.5 12.75 7.5H8.5V3.25Z" fill="#2BAC76" />
                    </svg>
                        Create nEw workspace</div>
                    <div>
                    </div>

                </div>


            </div>

        </>
    )
}

export default CreateWorkspace