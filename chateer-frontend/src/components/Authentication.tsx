import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { type Login, type AuthType, type Register } from '../types';
import { loginUser, registerUser } from '../services/user';
import { toast } from 'react-hot-toast';
import { FcSms } from 'react-icons/fc';
import { IoIosEyeOff, IoIosEye } from 'react-icons/io';
import { useDispatch } from 'react-redux';
import { setUser } from '../reducers/userSlice';

const Authentication = () => {
  const [register, setRegister] = useState<Register>({
    name: '',
    email: '',
    username: '',
    password: '',
  });

  const [login, setLogin] = useState<Login>({
    email: '',
    password: '',
  });
  const [type, setType] = useState<AuthType>('login');
  const [showPassword, setShowPassword] = useState<boolean>(false);

  // dispatch
  const dispatch = useDispatch();

  // handle navigation
  const navigate = useNavigate();

  // handle input changes
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (type === 'signup') {
      const { name, value } = e.target;
      setRegister((prev) => ({
        ...prev,
        [name]: value,
      }));
      return;
    }

    if (type === 'login') {
      const { name, value } = e.target;
      setLogin((prev) => ({
        ...prev,
        [name]: value,
      }));
      return;
    }
  };

  // handle Authentication for both login and signup
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      if (type === 'signup') {
        // signup loggic here
        const response = await registerUser(register);

        // save the user to the local storage
        localStorage.setItem('user', JSON.stringify(response));
        dispatch(setUser(response));
        toast.success('User registered successfully!');
        navigate('/home');
        setRegister({
          name: '',
          email: '',
          username: '',
          password: '',
        });
      } else {
        // handle login logic here
        const response = await loginUser(login);

        // handle the response by saving it in the local storage
        localStorage.setItem('user', JSON.stringify(response));
        // set the user
        dispatch(setUser(response));

        setLogin({
          email: '',
          password: '',
        });
        toast.success('User logged in successfully!');
        navigate('/home');
      }
    } catch (error) {
      console.error('Error registering user:', error);
    }
  };
  return (
    <form
      onClick={handleSubmit}
      className='card max-w-sm w-full bg-base-300 shadow-md p-4'
    >
      <fieldset className='border fieldset border-base-300 rounded-box shadow-md bg-base-100 w-full px-3 py-12'>
        <legend className='fieldset-legend'>
          {type === 'login' ? 'Login' : 'Sign up'}
        </legend>
        <div className='flex flex-col items-center'>
          <FcSms className='text-3xl mb-2' />
          <h1 className='capitalize font-bold text-xl lg:text-3xl mb-4'>
            {type === 'login' ? 'Log in to Chateer' : 'Create an  account'}
          </h1>
          <p className='text-center font-medium'>
            {type === 'login'
              ? 'Login in to Chateer to continue chatting with your closed ones'
              : 'To chat with your family, friends and work mates '}
          </p>
        </div>
        {type === 'signup' && (
          <label className='input validator w-full'>
            <svg
              className='h-[1em] opacity-50'
              xmlns='http://www.w3.org/2000/svg'
              viewBox='0 0 24 24'
            >
              <g
                strokeLinejoin='round'
                strokeLinecap='round'
                strokeWidth='2.5'
                fill='none'
                stroke='currentColor'
              >
                <path d='M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2'></path>
                <circle cx='12' cy='7' r='4'></circle>
              </g>
            </svg>
            <input
              type='text'
              required
              placeholder='Name'
              title='Only letters, numbers or dash'
              className='input-field'
              value={register.name}
              onChange={handleChange}
              name='name'
            />
          </label>
        )}
        {type === 'signup' && (
          <>
            <label className='input validator w-full'>
              <svg
                className='h-[1em] opacity-50'
                xmlns='http://www.w3.org/2000/svg'
                viewBox='0 0 24 24'
              >
                <g
                  strokeLinejoin='round'
                  strokeLinecap='round'
                  strokeWidth='2.5'
                  fill='none'
                  stroke='currentColor'
                >
                  <path d='M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2'></path>
                  <circle cx='12' cy='7' r='4'></circle>
                </g>
              </svg>
              <input
                type='text'
                required
                placeholder='Username'
                pattern='[A-Za-z][A-Za-z0-9\-]*'
                minLength={3}
                maxLength={30}
                title='Only letters, numbers or dash'
                className='input-field'
                value={register.username}
                onChange={handleChange}
                name='username'
              />
            </label>
            <p className='hidden validator-hint'>
              Must be 3 to 30 characters
              <br />
              containing only letters, numbers or dash
            </p>
          </>
        )}
        <label className='input validator w-full'>
          <svg
            className='h-[1em] opacity-50'
            xmlns='http://www.w3.org/2000/svg'
            viewBox='0 0 24 24'
          >
            <g
              strokeLinejoin='round'
              strokeLinecap='round'
              strokeWidth='2.5'
              fill='none'
              stroke='currentColor'
            >
              <rect width='20' height='16' x='2' y='4' rx='2'></rect>
              <path d='m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7'></path>
            </g>
          </svg>
          <input
            type='email'
            placeholder='mail@site.com'
            required
            className='input-field'
            value={type === 'login' ? login.email : register.email}
            onChange={handleChange}
            name='email'
            pattern='[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$'
            title='Enter valid email address'
            autoComplete='email'
          />
        </label>
        <div className='hidden validator-hint'>Enter valid email address</div>

        <label className='input validator w-full'>
          <svg
            className='h-[1em] opacity-50'
            xmlns='http://www.w3.org/2000/svg'
            viewBox='0 0 24 24'
          >
            <g
              strokeLinejoin='round'
              strokeLinecap='round'
              strokeWidth='2.5'
              fill='none'
              stroke='currentColor'
            >
              <path d='M2.586 17.414A2 2 0 0 0 2 18.828V21a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h1a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h.172a2 2 0 0 0 1.414-.586l.814-.814a6.5 6.5 0 1 0-4-4z'></path>
              <circle cx='16.5' cy='7.5' r='.5' fill='currentColor'></circle>
            </g>
          </svg>
          <input
            type={showPassword ? 'text' : 'password'}
            required
            placeholder='Password'
            minLength={8}
            pattern='(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}'
            title='Must be more than 8 characters, including number, lowercase letter, uppercase letter'
            className='input-field'
            value={type === 'login' ? login.password : register.password}
            onChange={handleChange}
            name='password'
            autoComplete='current-password'
          />
          <span
            className='cursor-pointer absolute right-3 top-1/2 transform -translate-y-1/2'
            onClick={() => setShowPassword(!showPassword)}
          >
            {showPassword ? <IoIosEye /> : <IoIosEyeOff />}
          </span>
        </label>
        <p className='hidden validator-hint'>
          Must be more than 8 characters, including
          <br />
          At least one number <br />
          At least one lowercase letter <br />
          At least one uppercase letter
        </p>

        <button className='mt-4 btn btn-neutral'>
          {type === 'login' ? 'Login' : 'Sign up'}
        </button>
        <p className='mt-2'>
          Don't have an account?{' '}
          <span
            className='underline'
            onClick={() => setType(type === 'login' ? 'signup' : 'login')}
          >
            {type === 'login'
              ? 'create an account'
              : 'login in to your account'}
          </span>
        </p>
      </fieldset>
    </form>
  );
};

export default Authentication;
