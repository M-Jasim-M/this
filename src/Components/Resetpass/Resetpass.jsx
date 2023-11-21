import React,{useState,useRef} from 'react'
import './Resetpass.css'

import logo from '../../Asserts/Images/logo.svg'
import respicture from '../../Asserts/Images/respasward.svg'

function Resetpass() {

  const [otp, setOTP] = useState(['', '', '', '']);
  const inputRefs = [
    useRef(null),
    useRef(null),
    useRef(null),
    useRef(null),
  ];

  const handleInputChange = (e, index) => {
    const value = e.target.value;

    // Ensure that only numeric characters are entered
    if (/^\d+$/.test(value) || value === '') {
      setOTP((prevOTP) => {
        const newOTP = [...prevOTP];
        newOTP[index] = value;
        return newOTP;
      });

      // Focus on the next input box if available
      if (index < 3 && value !== '') {
        inputRefs[index + 1].current.focus();
      }
     
    }
   
  };
  // setOTP(['', '', '', '', '', ''])
  const handleBackspace = (e, index) => {
    // Move to the previous input box on backspace if the current box is empty
    if (e.key === 'Backspace' && index > 0 && otp[index] === '') {
      inputRefs[index - 1].current.focus();
    }
  };
const handleSubmit = (e)=>{
  e.preventDefault();

  const code = otp.join('');
  console.log(code);


  setOTP(['', '', '', ''])
}

  return (
    <>
  <div className="resmain">
<div className="resleft">
 <img className='reslogo' src={logo} alt="" />
 <div><img src={respicture} alt="" /></div>
</div>

<div className="resright">
<div className='rescontain'>


<div>Oops!</div>
<div>Forgot Password</div>
<div>We’ve Send a Verification code On your <br />Email</div>
<div>Enter Code*</div>
<div>

{otp.map((digit, index) => (
          <input
            key={index}
            type="text"
            placeholder="-"
            value={digit}
            onChange={(e) => handleInputChange(e, index)}
            onKeyUp={(e) => handleBackspace(e, index)}
            maxLength={1}
            ref={inputRefs[index]}
          />
        ))}

</div>
<div><button onClick={handleSubmit}>VERIFY</button></div>

</div>
</div>



  </div>
    </>
  )
}

export default Resetpass;

