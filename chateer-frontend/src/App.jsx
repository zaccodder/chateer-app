import React from 'react';
import { RouterProvider, createBrowserRouter, createRoutesFromElements, Route } from 'react-router-dom';
import Layout from './components/Layout';
import UploadFile from './pages/UploadFile';
import ChatRoom from './pages/ChatRoom';
import ChatGroup from './pages/ChatGroup';
import SingleUser from './pages/SingleUser';
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route index element={<ChatRoom />} />
      <Route path="uploadfile" element={<UploadFile />} />
      <Route path="chatgroup" element={<ChatGroup />} />
      <Route path="singleuser" element={<SingleUser />} />
    </Route>
  )
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
