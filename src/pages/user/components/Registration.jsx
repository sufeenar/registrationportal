import { useDispatch, useSelector } from "react-redux";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { Link } from "react-router-dom";
import { validate } from "../validate";
import { addUser } from "../slice";
import { UserPlus } from "lucide-react";

export default function Registration() {
  const dispatch = useDispatch();
  const { loading, error } = useSelector((s) => s.user);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({ resolver: yupResolver(validate) });

  const onSubmit = (data) => {
    dispatch(addUser(data));
    reset();
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
      <div className="w-full max-w-3xl bg-white rounded-2xl shadow-lg p-8">
        {/* Header */}
        <div className="flex items-start justify-between mb-8">
          <div className="flex items-center gap-3">
            <div className="bg-indigo-100 p-3 rounded-xl">
              <UserPlus className="text-indigo-600" size={22} />
            </div>
            <div>
              <h2 className="text-xl font-semibold text-gray-800">
                Add New User
              </h2>
              <p className="text-sm text-gray-500">
                Enter user details to create a new account
              </p>
            </div>
          </div>

          <Link
            to="/users"
            className="text-sm font-medium text-indigo-600 hover:underline"
          >
            View User List
          </Link>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          {/* Full Name */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Full Name
            </label>
            <input
              {...register("name")}
              placeholder="Enter full name"
              className="w-full rounded-lg border border-gray-300 px-4 py-3 text-sm
                         focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
            {errors.name && (
              <p className="mt-1 text-sm text-red-500">
                {errors.name.message}
              </p>
            )}
          </div>

          {/* Email */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Email Address
            </label>
            <input
              {...register("email")}
              placeholder="Enter email address"
              className="w-full rounded-lg border border-gray-300 px-4 py-3 text-sm
                         focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
            {errors.email && (
              <p className="mt-1 text-sm text-red-500">
                {errors.email.message}
              </p>
            )}
          </div>

          {/* Mobile */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Mobile Number
            </label>
            <input
              {...register("mobile")}
              placeholder="Enter mobile number"
              className="w-full rounded-lg border border-gray-300 px-4 py-3 text-sm
                         focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
            {errors.mobile && (
              <p className="mt-1 text-sm text-red-500">
                {errors.mobile.message}
              </p>
            )}
          </div>

          {error && (
            <p className="text-sm text-red-600 bg-red-50 p-3 rounded-lg">
              {error}
            </p>
          )}

          {/* Action */}
          <div className="flex justify-end pt-4">
            <button
              type="submit"
              disabled={loading}
              className="bg-indigo-600 hover:bg-indigo-700 text-white
                         px-8 py-3 rounded-lg text-sm font-semibold
                         disabled:opacity-50 transition"
            >
              {loading ? "Saving..." : "Create User"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
