import './style.css';
import React, { useState } from 'react';
import { Formik, Form } from 'formik';
import { Link } from 'react-router-dom';
import * as yup from 'yup';
import LoginInput from '../../components/inputs/loginInputs';
const loginCreds = { email: '', password: '' };
export default function Login() {
  const [login, setLogin] = useState(loginCreds);
  const { email, password } = login;
  const handleChange = (e) => {
    const { name, value } = e.target;
    setLogin({ ...login, [name]: value });
  };
  const loginValidation = yup.object().shape({
    email: yup
      .string()
      .required('Email address is required')
      .email('Must be a valid email'),
    password: yup.string().required('Password is required'),
  });
  return (
    <div className='main'>
      <div className='login'>
        <div className='login_wrapper'>
          <div className='login_1'>
            <img src='../../icons/facebook.svg' alt='' />
            <span>
              Facebook helps you connect and share with the people in your life.
            </span>
          </div>
          <div className='login_2'>
            <div className='login_2_wrap'>
              <Formik
                enableReinitialize
                initialValues={{
                  email,
                  password,
                }}
                validationSchema={loginValidation}
              >
                {(formik) => (
                  <Form>
                    <LoginInput
                      type='text'
                      name='email'
                      placeholder='Email address or phone number'
                      onChange={handleChange}
                    />
                    <LoginInput
                      name='password'
                      type='password'
                      placeholder='Password'
                      onChange={handleChange}
                      bottom
                    />
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
