import React from 'react';
import './Signin.css';
import SubmitButton from './SubmitButton';
import { useState } from 'react';

const Signin = () => {

const [name,setname]= useState();
const [updatename, setupdatename] = useState([]);


const [pass,setpass] = useState();
const [updatepass, setupdatepass] = useState([]);  

const onSubmit =(e)=>{
  setupdatename((oldemail)=>{
    return [...oldemail, name];
  });
  setupdatepass((oldpass)=>{
    return [...oldpass, pass];
  });
  e.preventDefault();
  setname("");
  setpass("");
}

  const changeHandler=(e)=>{
      setname(e.target.value);
  }

  const  passChange=(e)=>{
    setpass(e.target.value);
  }




  let link1 = "https://www.facebook.com/login/";
  let link2 = "https://accounts.google.com/signin/v2/identifier?flowName=GlifWebSignIn&flowEntry=ServiceLogin"

  return (
    <div className='form'>
      <div className='formmain'>
        <h1 className='formh1'>Log In</h1>
        <form action='' className='__form' onSubmit={onSubmit}>
          <input
            className='text'
            onChange={changeHandler}
            value={name}
            type='email'
            placeholder='User Name'
          />

          <input
            className='text'
            onChange={passChange}
            value={pass}
            type='password'
            placeholder='Pass Word'
          />
          {/* <button type='submit' className='btn'>
            Submit
          </button> */}
          <SubmitButton />
          <div className='fbgoogle'>
            <a href={link1} target='_blank'>
              <img className='fb' alt='' />
            </a>

            <a href={link2} target='_denish'>
              <img className='google' alt='' />
            </a>
          </div>
          <div></div>
        </form>
      </div>
      <div className='usepasssign'>
        <table>
          <tr>
            <th>Username</th>
            <th>Password</th>
          </tr>
          <tr>
            <td>
          
              {updatename.map((val) => {
                return <p>{val}</p>;
              })}
            </td>

            <td>{updatepass.map((val)=>{
              return <p>{val}</p>;
            })}</td>
          </tr>
        </table>
      </div>
    </div>
  );
}

export default Signin;
             
       