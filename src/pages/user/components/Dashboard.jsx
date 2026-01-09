import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-2xl font-bold mb-6">Dashboard</h1>

      <div
        onClick={() => navigate("/register")}
        className="bg-white p-6 rounded-xl shadow cursor-pointer hover:shadow-lg w-64"
      >
        <h3 className="font-semibold">Add User</h3>
        <p className="text-sm text-gray-500">Create new user</p>
      </div>
    </div>
  );
};

export default Dashboard;
