import React from 'react'
import './Buttons.css'
import Card from './Card';
function Inprogress({chat}) {
  return (
    <>
     <div className='progress'>
<div className='buttondiv4'>
In Progress
</div>
<Card showchat={chat}/>



    </div>
    
    </>
  )
}

export default Inprogress;