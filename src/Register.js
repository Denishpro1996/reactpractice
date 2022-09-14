import React from 'react'
import './Register.css';
import SubmitButton from './SubmitButton';
import { useState } from 'react';
const Register = () => {

  const preventdefault=(e)=>{
      e.preventDefault();
      setfname("");
      setlname("");
      setcname("");
      setPin("");
      setName("");
      setmail("");
  }

  const [fname,setfname]=useState();
  const [lname,setlname] = useState();
  const [cname,setcname]=useState();
  const [pin,setPin]=useState();
  const [num,setName] = useState();
  const [mail,setmail]=useState();

    const  firstchange =(e)=>{
      setfname(e.terget.value)
    }
    const lastchange=(e)=>{
        setlname(e.target.value)
    }
    const citychange=(e)=>{
        setcname(e.target.value)
    }
    const pinChange = (e) => {
        setPin(e.target.value);
        };
    const numChange = (e) => {
            setName(e.target.value);
          };
    const mailChange = (e) => {
            setmail(e.target.value);
          };
  return (
    <div className='register'>
      <div className='subreg'>
        <form action='' className='regform' onSubmit={preventdefault}>
          <h1 className='regh1'>Register</h1>
          <input
            className='rf'
            type='text'
            onChange={firstchange}
            value={fname}
            placeholder='First Name'
          />
          <input
            className='rf'
            type='text'
            onChange={lastchange}
            value={lname}
            placeholder='Last Name'
          />
          <input
            className='rf'
            type='text'
            onChange={citychange}
            value={cname}
            placeholder=' City'
          />
          <input
            className='rf'
            type='text'
            onChange={pinChange}
            value={pin}
            placeholder='Pin Code'
          />
          <input
            className='rf'
            type='text'
            onChange={numChange}
            value={num}
            placeholder='Phone Number'
          />
          <input
            className='rf'
            type='text'
            placeholder='Email'
            onChange={mailChange}
            value={mail}
          />
          <SubmitButton />
        </form>
      </div>
    </div>
  );
}

export default Register;