import { useAuth } from "../hooks/useAuth";
import { useNavigate } from "react-router-dom";

const Profile = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h2 className="text-2xl font-semibold mb-4">Profile</h2>
      {user ? (
        <div className="bg-white p-6 rounded shadow-md w-80">
          <p><strong>Name:</strong> {user.name}</p>
          <p><strong>Email:</strong> {user.email}</p>
          <button onClick={handleLogout} className="w-full bg-red-500 text-white p-2 rounded mt-4">
            Logout
          </button>
        </div>
      ) : (
        <p>No user found. <a href="/login" className="text-blue-500">Login</a></p>
      )}
    </div>
  );
};

export default Profile;
