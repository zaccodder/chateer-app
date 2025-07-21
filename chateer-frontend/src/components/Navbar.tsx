import { FcSms } from 'react-icons/fc';
import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-hot-toast';
import { clearUser } from '../reducers/userSlice';
const Navbar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const links = [
    {
      path: '/home',
      text: 'Home',
    },
    {
      path: '/profile',
      text: 'Profile',
    },
    {
      path: '/settings',
      text: 'Settings',
    },
  ];

  // handling logout functionality
  const handleLogout = () => {
    dispatch(clearUser());
    toast.success('Logout successfully');
    navigate('/');
  };
  return (
    <div className='shadow-sm navbar justify-between'>
      <Link to='/' className='btn btn-ghost normal-case text-xl'>
        <FcSms className='inline-block w-6 h-6 mr-2' />
        Chateer
      </Link>

      <ul className='flex space-x-5 '>
        {links.map((link) => {
          return (
            <Link key={link.text} to={link.path} className='btn btn-ghost'>
              {link.text}
            </Link>
          );
        })}
        <button className='btn' onClick={handleLogout}>
          logout
        </button>
      </ul>
    </div>
  );
};

export default Navbar;
