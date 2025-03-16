import SignUpPage from "./components/signup/SignUpPage";
import LoginPage from "./components/Login/LoginPage";
import { Routes, Route, Navigate } from "react-router-dom";
import { useEffect } from "react";

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
      <div className="flex items-center justify-center h-screen">
        <Loader className="size-10 animate-spin" />
      </div>
    );

  return (
    <div data-theme={theme}>
      <Navbar />

      <Routes>
        <Route path="/" element={authUser ? <HomePage /> : <Navigate to="/login" />} />
        <Route path="/signup" element={!authUser ? <SignUpPage /> : <Navigate to="/" />} />
        <Route path="/login" element={!authUser ? <LoginPage /> : <Navigate to="/" />} />
        <Route path="/settings" element={<SettingsPage />} />
        <Route path="/profile" element={authUser ? <ProfilePage /> : <Navigate to="/login" />} />
      </Routes>

      <Toaster />
    </div>
  );
};
import React from 'react';
import { RouterProvider, createBrowserRouter, createRoutesFromElements, Route } from 'react-router-dom';
import Layout from './components/Layout';
import UploadFile from './pages/UploadFile';
import ChatRoom from './pages/ChatRoom';
import ChatGroup from './pages/ChatGroup';
import SingleUser from './pages/SingleUser';
import Login from './pages/Login';
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route index element={<Login />} />
      <Route path="singleuser" element={<SingleUser />} />
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
