import React, { useEffect } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import Navbar from './components/Navbar';
import HomePage from './pages/HomePage';
import SignUpPage from './components/signup/SignUpPage';
import LoginPage from './components/Login/LoginPage';
import SettingsPage from './pages/SettingsPage';
import ProfilePage from './pages/ProfilePage';
import Layout from './components/Layout';
import UploadFile from './pages/UploadFile';
import ChatRoom from './pages/ChatRoom';
import ChatGroup from './pages/ChatGroup';
import SingleUser from './pages/SingleUser';

const App = () => {
  const { authUser, checkAuth, isCheckingAuth, onlineUsers } = useAuthStore();
  const { theme } = useThemeStore();

  console.log({ onlineUsers });

  useEffect(() => {
    checkAuth();
  }, [checkAuth]);

  console.log({ authUser });

  if (isCheckingAuth && !authUser)
    return (
      <div className='flex items-center justify-center h-screen'>
        <Loader className='size-10 animate-spin' />
      </div>
    );

  return (
    <div data-theme={theme}>
      <Router>
        <Navbar />
        <Routes>
          <Route
            path='/'
            element={authUser ? <HomePage /> : <Navigate to='/login' />}
          />
          <Route
            path='/signup'
            element={!authUser ? <SignUpPage /> : <Navigate to='/' />}
          />
          <Route
            path='/login'
            element={!authUser ? <LoginPage /> : <Navigate to='/' />}
          />
          <Route path='/settings' element={<SettingsPage />} />
          <Route
            path='/profile'
            element={authUser ? <ProfilePage /> : <Navigate to='/login' />}
          />
          <Route path='/chat' element={<Layout />}>
            <Route index element={<ChatRoom />} />
            <Route path='uploadfile' element={<UploadFile />} />
            <Route path='chatgroup' element={<ChatGroup />} />
            <Route path='singleuser' element={<SingleUser />} />
          </Route>
        </Routes>
        <Toaster />
      </Router>
    </div>
  );
};
import {
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from 'react-router-dom';
import Login from './pages/Login';
import Signup from './pages/Signup';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout />}>
      <Route index element={<Login />} />
      <Route path='signup' element={<Signup />} />
      <Route path='singleuser/:userId' element={<SingleUser />} />
      <Route path='chatroom' element={<ChatRoom />} />
      <Route path='uploadfile' element={<UploadFile />} />
      <Route path='chatgroup' element={<ChatGroup />} />
    </Route>
  )
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
