import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {
    list: [],
    loading: false,
    error: null,
  },
  reducers: {
    fetchUsers: (state) => {
      state.loading = true;
      state.error = null;
    },
    fetchUsersSuccess: (state, action) => {
      state.loading = false;
      state.list = action.payload;
    },
    fetchUsersFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },

    addUser: (state) => {
      state.loading = true;
      state.error = null;
    },
    addUserSuccess: (state, action) => {
      state.loading = false;
      state.list.unshift(action.payload);
    },
    addUserFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },

    deleteUser: (state) => {
      state.loading = true;
    },
  },
});

export const {
  fetchUsers,
  fetchUsersSuccess,
  fetchUsersFailure,
  addUser,
  addUserSuccess,
  addUserFailure,
  deleteUser,
} = userSlice.actions;

export default userSlice.reducer;
