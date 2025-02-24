// src/pages/Home.tsx
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-3xl font-bold">Welcome to Chateer</h1>
      <p className="mt-4 text-lg">A place to connect and chat in real time.</p>
      <div className="mt-6">
        <Link to="/login" className="px-4 py-2 bg-blue-500 text-white rounded-lg shadow-md hover:bg-blue-600">
          Get Started
        </Link>
      </div>
    </div>
  );
};

export default Home;
