import React from 'react'
import './side2.css'
import  comment from '../../Asserts/Images/commet.svg'

export default function Sidee() {
  return (
    <>
<div className='sidemain'>

    <div className='smaine'>
       
       <div className='s2ma'>
       <div className='projec'>Projects:</div>
       <div className='fif'>50</div>
       </div>

       <div className='s2ma'>
       <div className='projec'>Completed:</div>
       <div className='fif' style={{"border-left":"2px solid #89D6CB"}}>30</div>
       </div>

       <div className='s2ma'>
       <div className='projec'>Inprogress:</div>
       <div className='fif' style={{"border-left":"2px solid #6A6EA4"}}>15</div>
       </div>

       <div className='s2ma' >
       <div className='projec'>Overdue:</div>
       <div className='fif' style={{"border-left":"2px solid #FF8260"}}>5</div>
       </div>

</div><br/>

<div className="commentsdiv">

<div className='flie'>
    <div className='firss'> Activity </div>
    <div className='firsss'>...</div>
</div>

<div className='mainn'>

<div className='imag3'><img src={comment} alt="" /></div>
<div className='chilll'>
<div className='lily'>Lily Anderson<br/><span className='today'>Today, 10:15 AM</span></div>

<div className='comme'>Commented on <span className='colo'>UI UX Project</span></div>
<div className='thats'>That’s pretty good.👌      For the Hero<br/> section, maybe you can reduce some<br/> objects for white space.</div>

</div>
</div>

<div className='mainn'>

<div className='imag3'><img src={comment} alt="" /></div>
<div className='chilll'>
<div className='lily'>Lily Anderson<br/><span className='today'>Today, 10:15 AM</span></div>

<div className='comme'>Commented on <span className='colo'>UI UX Project</span></div>
<div className='thats'>That’s pretty good.👌      For the Hero<br/> section, maybe you can reduce some<br/> objects for white space.</div>

</div>

</div>


<div className='mainn'>

<div className='imag3'><img src={comment} alt="" /></div>
<div className='chilll'>
<div className='lily'>Lily Anderson<br/><span className='today'>Today, 10:15 AM</span></div>

<div className='comme'>Commented on <span className='colo'>UI UX Project</span></div>
<div className='thats'>That’s pretty good.👌      For the Hero<br/> section, maybe you can reduce some<br/> objects for white space.</div>

</div>

</div>

</div><br/>


</div>
    </>
  )
}
