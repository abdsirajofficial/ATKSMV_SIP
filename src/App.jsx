import "./App.css";
import { HomePage } from "./components/HomePage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./components/Login";
import { UserDashboard } from "./components/UserPage/userDashboard";
import { Dashboard } from "./components/UserPage/menus/dashboard";
import { Profile } from "./components/UserPage/menus/profile";
import { History } from "./components/UserPage/menus/history";
import { AdminDashboard } from "./components/AdminPage/adminDashboard";
import { Withdrawal } from "./components/AdminPage/menus/withdrawal";
import { Package } from "./components/AdminPage/menus/packages";
import { Users } from "./components/AdminPage/menus/users";
import { AdminHistory } from "./components/AdminPage/menus/History";
import { UserWithdrawal } from "./components/UserPage/menus/userWithdrawal";
import { Payment } from "./components/AdminPage/menus/payment";
import Register from "./components/Register";
import { useGlobalLoading } from "./components/useGlobalLoading ";
import DashBoards from "./components/AdminPage/menus/dashBoards";

function App() {
  const [isLoading, setIsLoading] = useGlobalLoading();

  return (
    <div className="w-full h-screen bg-[#f9fbfe] font-mono ">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/user" element={<UserDashboard isLoading={isLoading} />} >
            <Route path="/user/dashboard" element={<Dashboard />} />
            <Route path="/user/profile" element={<Profile />} />
            <Route path="/user/history" element={<History />} />
            <Route path="/user/withdrawal" element={<UserWithdrawal />} />
          </Route>
          <Route path="/admin" element={<AdminDashboard isLoading={isLoading} />} >
            <Route path="/admin/dashboard" element={<DashBoards />} />
            <Route path="/admin/users" element={<Users />} />
            <Route path="/admin/withdrawal" element={<Withdrawal />} />
            <Route path="/admin/history" element={<AdminHistory />} />
            <Route path="/admin/packages" element={<Package />} />
            <Route path="/admin/payment" element={<Payment />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
