import React, { useState } from 'react'

const Validation = () => {

    const [name,setname] =useState('');
    const [email,setemail] =useState('');
    const [password,setpassword] =useState('');
    const [nameError,setnameError] = useState(false);
    const [emailError,setemailError] = useState(false);
    const [passwordError,setpasswordError] = useState(false);

    function namechange (e){
        let item =e.target.value;
        if(item < 3 || !/^[A-Za-z]+$/.test(item)){
            setnameError(true)
        }
        else{
            setnameError(false);
        }
        setname(item);
    }

    function emailchange (e){
        let item = e.target.value;
        if(!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(item)){
            setemailError(true);
        }
        else{
            setemailError(false);
        }
        setemail(item);

    }

    function passwordchange (e){
        let item = e.target.value;
        if(item.length < 8){
            setpasswordError(true);
        }
        else{
            setpasswordError(false);
        }
        setpassword(item);
    }

  return (
    <div>
      <form action="">
        <label htmlFor="name">Enter your full name</label>
        <input type="text" name="name" id="name" value={name} onChange={namechange}/>{nameError? <span>invalid format of name</span>: ""}
        <br /><br />

        <div className='group-gender'>
            <label htmlFor="gender">Gender : </label>
            <input type="radio" name="gender"/>
            <label htmlFor="gender">Male</label>
            <input type="radio" name="gender" />
            <label htmlFor="gender">Female</label>
            <input type="radio" name="gender" />
            <label htmlFor="gender">Other</label>
        </div>
        <br />
        <label htmlFor="email">Enter the email address</label>
        <input type="text" name="email" id="email" onChange={emailchange} value={email}/>{emailError ? <span>invalid email</span> : ""}
<br /><br />
        <label htmlFor="password">Enter the password</label>
        <input type="password" onChange={passwordchange} value={password}/>{passwordError ? <span>Invalid Password</span> : ""}
        <br /><br />
        <button type='submit'>Submit</button>
      </form>
    </div>
  )
}

export default Validation
