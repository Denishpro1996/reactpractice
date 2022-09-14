import React from 'react';
import './ContactUs.css';
import { useState } from 'react';
import SubmitButton from './SubmitButton';


const ContactUs = () => {

  const [name,setname]=useState();
  const [lname,setlname]=useState();
  const [que,setque]=useState();

  // const [Username, setUpdateName] = useState();
  // const [LastName, setUpdateLName] = useState();
  // const [Question, setUpdateQue] = useState();

const Submit=(e)=>{
  e.preventDefault();
  // setUpdateName(name);
  // setUpdateLName(lname);
  // setUpdateQue(que);
  
  setname("");
  setlname("")
  setque("");

}

const changeName=(e)=>{
  setname(e.target.value)
}
const changeLName=(e)=>{
  setlname(e.target.value);
}

const changeQue = (e) => {
  setque(e.target.value);
};

  return (
    <div className='contactbody'>
      <div className='contactform'>
        <form action='' onSubmit={Submit} className='contact'>
          <h1>Contact Us</h1>

          <input
            type='text'
            className='inputcontact'
            placeholder='Your Name'
            onChange={changeName}
            value={name}
          />
          <input
            type='text'
            className='inputcontact'
            placeholder='Last Name'
            onChange={changeLName}
            value={lname}
          />
          <input
            type='text'
            className='inputcontact'
            placeholder='Question'
            onChange={changeQue}
            value={que}
          />
          <SubmitButton />
          {/* <div className='ulq'>
            Name:{Username} <br />
            Last Name : {LastName} <br />
            Question :{Question}
          </div> */}
        </form>
      </div>
      <div className='contacttext'>
        <p>We Would Love to here From You!!</p>
        <h1>Contact US</h1>
        <p>
          Right now there is no us,i'm running the show alone.So every feedback
          Your Provide,any Suggestion you have and any new idea Your Like to
          share -- Please don't hesitate,write to me immediately.
        </p>
        <p>
          I'm social animal.Animal Because i've some degree of randomness in my
          behaviour.Social because of i Love to here and share with People
        </p>
      </div>
    </div>
  );
}

export default ContactUs;
