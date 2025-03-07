import { useState } from 'react';
import { User } from 'lucide-react';
import userService from '../../api/user';

const Home = () => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
  });
  const [isSignUp, setIsSignUp] = useState(false);

  // handle form submit
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      // if username signing up
      if (formData.username) {
        const { data } = await userService.signup(formData);
        console.log(data);
        return;
      }
      // sign in
      const { data } = await userService.login(formData);
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  // handle form input change
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.type]: e.target.value });
  };
  return (
    <div className='bg-base-300'>
      <div className='container px-4 mx-auto lg:px-8'>
        <div className='grid lg:grid-cols-2'>
          <div className=' flex items-center justify-center flex-col bg-base-300  h-screen lg:p-12'>
            <div className='bg-base-100 card w-full items-center px-5 py-10'>
              <div className='flex items-center justify-center flex-col mb-3'>
                <User size={32} />
                <p className='text-2xl mt-3'>
                  {isSignUp ? 'Sign up' : 'Sign in'}
                </p>
              </div>
              <form
                className='w-full max-w-sm flex flex-col gap-4 items-center'
                onSubmit={handleSubmit}
              >
                {isSignUp && (
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
                        type='input'
                        required
                        placeholder='Username'
                        pattern='[A-Za-z][A-Za-z0-9\-]*'
                        minLength={3}
                        maxLength={30}
                        title='Only letters, numbers or dash'
                        autoFocus
                        value={formData.username}
                        onChange={handleInputChange}
                      />
                    </label>
                    <p className='validator-hint hidden'>
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
                    value={formData.email}
                    onChange={handleInputChange}
                  />
                </label>
                <div className='validator-hint hidden'>
                  Enter valid email address
                </div>
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
                      <circle
                        cx='16.5'
                        cy='7.5'
                        r='.5'
                        fill='currentColor'
                      ></circle>
                    </g>
                  </svg>
                  <input
                    type='password'
                    required
                    placeholder='Password'
                    minLength={8}
                    pattern='(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}'
                    title='Must be more than 8 characters, including number, lowercase letter, uppercase letter'
                    autoComplete='false'
                    value={formData.password}
                    onChange={handleInputChange}
                  />
                </label>
                <p className='validator-hint hidden'>
                  Must be more than 8 characters, including
                  <br />
                  At least one number
                  <br />
                  At least one lowercase letter
                  <br />
                  At least one uppercase letter
                </p>
                <p>
                  Don't have an account?{' '}
                  <span
                    className='btn btn-link'
                    onClick={() => setIsSignUp(!isSignUp)}
                  >
                    Sign up
                  </span>
                </p>
                <button className='btn btn-primary'>
                  {isSignUp ? 'Sign up' : 'Sign in'}
                </button>
              </form>
            </div>
          </div>
          <div className='hidden lg:flex items-center justify-center p-12 bg-base-200'>
            <div className='max-w-md text-center'>
              <h1 className='text-2xl font-bold mb-2'>
                {isSignUp ? 'Welcome to Chateer' : 'Welcome back to Chateer'}
              </h1>
              <p className='tracking-wide'>
                Chat, share ideas, create an amazing friendship throuh chateer
                app with your friends and family
              </p>
              <div className='grid grid-cols-3 gap-3 mt-8'>
                {[...new Array(9)].map((_, i) => {
                  return (
                    <div
                      className={`aspect-square bg-primary/10 rounded-2xl ${
                        i % 2 === 0 ? 'animate-pulse' : ''
                      }`}
                      key={i}
                    />
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
