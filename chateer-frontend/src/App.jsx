import Layout from './components/Layout'
import ChatRoom from './pages/ChatRoom'
import Home from './pages/Home'
import ChatGroup from './pages/ChatGroup'

import {
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom"

const router = createBrowserRouter(createRoutesFromElements(
  <Route path="/" element={<Layout />}>
    <Route index element={<Home />} >
      <Route path="chatroom" element={<ChatRoom />} />
      <Route path="chatgroup" element={<ChatGroup />} />
    </Route>

  </Route>
))

function App() {

  return (
    <RouterProvider router={router} />
  )
}

export default App
