import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Registration from "./pages/user/components/Registration";
import UserList from "./pages/user/components/UserList";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/register" />} />
        <Route path="/register" element={<Registration />} />
        <Route path="/users" element={<UserList />} />
      </Routes>
    </BrowserRouter>
  );
}
