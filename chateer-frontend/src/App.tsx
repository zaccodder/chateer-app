import { Navigate, Route, Routes } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import type { RootState } from './store';
import { Home, MainHome, Settings, Profile } from './pages';
import { Navbar } from './components';
import { useEffect } from 'react';
import { setUser } from './reducers/userSlice';

const App = () => {
  const dispatch = useDispatch();
  const user = useSelector((state: RootState) => state.user).user;
  useEffect(() => {
    const userData = JSON.parse(localStorage.getItem('user')!);
    dispatch(setUser(userData));
  }, [dispatch]);

  return (
    <div className='min-h-screen'>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />

        <Route
          path='/home'
          element={user ? <MainHome /> : <Navigate to={'/'} />}
        />

        <Route path='/settings' element={<Settings />} />

        <Route
          path='/profile'
          element={user ? <Profile /> : <Navigate to={'/'} />}
        />
      </Routes>
    </div>
  );
};

export default App;
