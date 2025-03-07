import { Route, Routes } from 'react-router-dom';
import Navbar from './components/Navabr/Navbar';
import Home from './components/Home/Home';

const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
      </Routes>
    </div>
  );
};

export default App;
