import React from 'react'
import './Buttons.css'
import Card from './Card'

function Overdue({chat}) {
  return (
    <>
    <div className='overdue'>
<div className='buttondiv'>
Overdue
</div>
<Card showchat={chat}/>


    </div>
    
    
    </>
  )
}

export default Overdue