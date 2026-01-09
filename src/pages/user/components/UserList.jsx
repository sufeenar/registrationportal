import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {fetchUsers} from '../slice'
import { Link } from "react-router-dom";

export default function UserList() {
  const dispatch = useDispatch();
  const { list, loading, error } = useSelector((s) => s.user);

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  return (
    <div className="max-w-4xl mx-auto p-6">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-bold text-gray-800">User List</h2>
        <Link
          to="/register"
          className="text-indigo-600 font-semibold hover:underline"
        >
          + Add User
        </Link>
      </div>

      {loading && <p>Loading...</p>}
      {error && <p className="text-red-600">{error}</p>}

      <div className="bg-white rounded-2xl shadow-md overflow-x-auto">
        <table className="min-w-full border border-gray-200">
          <thead className="bg-indigo-600 text-white">
            <tr>
              <th className="py-2 px-4 text-left">Name</th>
              <th className="py-2 px-4 text-left">Email</th>
              <th className="py-2 px-4 text-left">Mobile</th>
            </tr>
          </thead>
          <tbody>
            {list.map((u) => (
              <tr key={u.id} className="border-b hover:bg-gray-50">
                <td className="py-2 px-4">{u.name}</td>
                <td className="py-2 px-4">{u.email}</td>
                <td className="py-2 px-4">{u.mobile}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
