import React from 'react'
import './Buttons.css'
import Card from './Card';

function Waiting({chat}) {
  return (
   <>
   <div className='waiting'>
<div className='buttondiv3'>
Waiting For Feedback
</div>
<Card showchat={chat}/>
<Card showchat={chat}/>
<Card showchat={chat} />
<Card showchat={chat}/>
<Card showchat={chat}/>


    </div>
   
   
   </>
  )
}

export default Waiting;