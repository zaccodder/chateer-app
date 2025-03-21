import React from 'react';
import { RouterProvider, createBrowserRouter, createRoutesFromElements, Route } from 'react-router-dom';
import Layout from './components/Layout';
import UploadFile from './pages/UploadFile';
import ChatRoom from './pages/ChatRoom';
import ChatGroup from './pages/ChatGroup';
import SingleUser from './pages/SingleUser';
import Login from './pages/Login';
import Signup from './pages/Signup';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route index element={<Login />} />
      <Route path="signup" element={<Signup />} />
      <Route path="singleuser/:userId" element={<SingleUser />} />
      <Route path="chatroom" element={<ChatRoom />} />
      <Route path="uploadfile" element={<UploadFile />} />
      <Route path="chatgroup" element={<ChatGroup />} />
    </Route>
  )
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
