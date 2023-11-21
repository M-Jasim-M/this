
import React, { useState } from 'react';
import './Workspace.css';
import logo from '../../Asserts/Images/logo.svg';
import workspace from '../../Asserts/Images/workspace.svg';
import axios from 'axios';

function Workspace() {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [emails, setEmails] = useState([]);
  const [companyLogo, setCompanyLogo] = useState(null);

  const handleInputChange = (e) => {
    setEmail(e.target.value);
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' && email.trim() !== '') {
      setEmails([...emails, email]);
      setEmail('');
    }
  };

  const removeEmail = (index) => {
    const updatedEmails = emails.filter((_, i) => i !== index);
    setEmails(updatedEmails);
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setCompanyLogo(URL.createObjectURL(file));
  };

  const handleImageClick = () => {
    document.getElementById('imageInput').click();
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append('companyLogo', companyLogo);
    formData.append('name', name);
    formData.append('emails', JSON.stringify(emails));
console.log(companyLogo, emails, name);

    axios.post('http://localhost:5000/upload', formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    })
    .then((res) => {
      alert('Data sent successfully');
    })
    .catch((err) => {
      alert('Error sending data: ' + err);
    });

    setEmails([]);
    setName('');
    setCompanyLogo(null);
  };

  return (
    <>
      <div className="workmain">
        <div className="workleft">
          <img className='worklogo' src={logo} alt="" />
          <div>
            <img src={workspace} alt="Company Logo" />
          </div>
        </div>
        <div className="workright">
          <div className='formcontain'>
            <div>Create your Workspace!</div>
            <div>Enter Details About your organization</div>
            <form>

            <label>Company Profile* </label>
<div onClick={handleImageClick} className='uploadimage'>
<svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 25 25" fill="none">
  <path d="M12.438 15.3236C13.6075 15.3236 14.5556 14.3754 14.5556 13.2059C14.5556 12.0364 13.6075 11.0883 12.438 11.0883C11.2684 11.0883 10.3203 12.0364 10.3203 13.2059C10.3203 14.3754 11.2684 15.3236 12.438 15.3236Z" stroke="#2BAC76" stroke-width="1.5"/>
  <path d="M5.37891 13.4629C5.37891 11.2994 5.37891 10.218 5.90761 9.44148C6.13714 9.10382 6.43127 8.81497 6.77302 8.5916C7.28126 8.25772 7.91797 8.13842 8.89279 8.09607C9.35797 8.09607 9.7582 7.75019 9.84926 7.30195C9.91885 6.97362 10.0997 6.67939 10.3611 6.46898C10.6226 6.25856 10.9487 6.14487 11.2843 6.14713H13.5911C14.2886 6.14713 14.8893 6.63066 15.0262 7.30195C15.1173 7.75019 15.5175 8.09607 15.9827 8.09607C16.9568 8.13842 17.5935 8.25842 18.1024 8.5916C18.4448 8.81607 18.7391 9.10477 18.9678 9.44148C19.4966 10.218 19.4966 11.2994 19.4966 13.4629C19.4966 15.6257 19.4966 16.7071 18.9678 17.4843C18.7379 17.8216 18.4439 18.1104 18.1024 18.3342C17.3111 18.853 16.2093 18.853 14.0062 18.853H10.8693C8.6662 18.853 7.56432 18.853 6.77302 18.3342C6.43176 18.1102 6.13794 17.8211 5.90832 17.4836C5.75532 17.255 5.64241 17.0019 5.57444 16.7354M17.3789 11.0883H16.673" stroke="#2BAC76" stroke-width="1.5" stroke-linecap="round"/>
</svg>
<div>Upload Photo</div>

            <img src={companyLogo} alt='' />
          </div>
          <input
            type="file"
            accept="image/*"
            id="imageInput"
            style={{ display: 'none' }}
            onChange={handleImageChange}
          />

              <label>Company Name*</label><br />
              <input
                type="text"
                placeholder='Enter Name'
                value={name}
                onChange={(e) => { setName(e.target.value) }}
              /><br />
              <label>Members Email*</label><br />
              <input
                type="text"
                placeholder="Enter email and press Enter"
                maxLength="30"
                value={email}
                onChange={handleInputChange}
                onKeyDown={handleKeyDown}
              />
            </form>
            <div className='emails'>
              {emails.map((email, index) => (
                <div id='emailsdiv' key={index}>
                  {email}
                  <svg onClick={() => removeEmail(index)} xmlns="http://www.w3.org/2000/svg" width="12" height="11" viewBox="0 0 12 11" fill="none">
                    <path d="M10.1655 1.25739L5.92282 5.50004M5.92282 5.50004L1.68018 9.74268M5.92282 5.50004L1.68014 1.25736M5.92282 5.50004L10.1654 9.74264" stroke="#2BAC76" stroke-width="2" stroke-linecap="round" />
                  </svg>
                </div>
              ))}
            </div>
            <div>
              <button disabled={!name || emails.length === 0} onClick={handleSubmit}>Let’s Go</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Workspace;

