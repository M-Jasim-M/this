import React from 'react'
import Card from './Card'

function Compleate({chat}) {
  return (
    <>
    <div className='compleate'>
<div className='buttondiv2'>
Compleate
</div>
<Card showchat={chat}/>
<Card showchat={chat}/>

    </div>
    </>
  )
}

export default Compleate;