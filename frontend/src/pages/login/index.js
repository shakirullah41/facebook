import './style.css';
import React from 'react';
import { Formik, Form } from 'formik';
import { Link } from 'react-router-dom';
import LoginInput from '../../components/inputs/loginInputs';
export default function Login() {
  return (
    <div className='main'>
      <div class='login'>
        <div className='login_wrapper'>
          <div className='login_1'>
            <img src='../../icons/facebook.svg' alt='' />
            <span>
              Facebook helps you connect and share with the people in your life.
            </span>
          </div>
          <div className='login_2'>
            <div className='login_2_wrap'>
              <Formik>
                {(formik) => (
                  <Form>
                    <LoginInput placeholder='Email address or phone number' />
                    <LoginInput placeholder='Password' />
                    <button type='submit' className='blue_btn'>
                      Log In
                    </button>
                  </Form>
                )}
              </Formik>
              <Link to='/forgot' className='forgot_password'>
                Forgotten password ?
              </Link>
              <div className='sign_splitter'></div>
              <button className='green_btn open_signup'>
                Create New Account
              </button>
            </div>
            <Link to='/' className='sign_extra'>
              <b>Create a Page</b> for a celebrity, brand or business.
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
