import React from 'react'
import './Header.css'
import { Link } from 'react-router-dom';
import { useState } from 'react';
import axios from 'axios';


const Header = () => {


  const [image,setImage]=useState()


const handleChange=(e)=>{
  setImage(e.target.files[0])
}
const handleApi =()=>{
  const url=''

  const formData = new FormData()
  formData('image',image) //(1st field name , 2nd use state)

  axios.post(url,formData).then((res)=>{
    console.log(res)
  })
}
  return (
    <div className='Header'>
      <nav className='navbar navbar-expand-lg bg-light'>
        <div className='container-fluid'>
          <a className='navbar-brand' to='#'>
            <h1 className='ajio'>Ajio</h1>
          </a>
          {/* <button
            className='navbar-toggler'
            type='button'
            data-bs-toggle='collapse'
            data-bs-target='#navbarSupportedContent'
            aria-controls='navbarSupportedContent'
            aria-expanded='false'
            aria-label='Toggle navigation'>
            <span className='navbar-toggler-icon'></span>
          </button> */}
          <div className='collapse navbar-collapse' id='navbarSupportedContent'>
            <ul className='navbar-nav me-auto mb-2 mb-lg-0'>
              <li className='nav-item'>
                <a className='nav-link' aria-current='page' to='#'>
                  <Link to='/' className='anchor'>
                    HOME
                  </Link>
                </a>
              </li>
              <li className='nav-item'>
                <a
                  className='nav-link '
                  aria-current='page'
                  to='#'
                  id='contact'>
                  <Link to='/ContactUs' className='anchor'>
                    CONTACT US
                  </Link>
                </a>
              </li>

              <li className='nav-item'>
                <a className='nav-link' aria-current='page' to='#'>
                  <Link to='/Aboutus' className='anchor'>
                    {" "}
                    ABOUT US{" "}
                  </Link>
                </a>
              </li>

              <li className='nav-item'>
                <a className='nav-link signin' aria-current='page' to='#'>
                  <Link to='/Signin' className='anchor'>
                    SIGN IN
                  </Link>
                </a>
              </li>

              <li className='nav-item'>
                <a className='nav-link ' aria-current='page' to='#'>
                  <Link to='/Register' className='anchor'>
                    REGISTER
                  </Link>
                </a>
              </li>
              {/* ================================ */}
           
              {/* ================================ */}

              <form>
                <input
                  className='search_input'
                  type='search'
                  placeholder='Search'
                  aria-label='Search'
                />
                {/* <button className='search_button' type='submit'> */}
                <img
                  className='search_button'
                  src='https://www.freepnglogos.com/uploads/search-png/search-icon-transparent-images-vector-15.png'
                  alt=''
                />
                {/* </button> */}
              </form>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Header;

