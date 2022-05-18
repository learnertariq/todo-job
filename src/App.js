import { ToastContainer } from "react-toastify";
import "./App.css";
import "react-toastify/dist/ReactToastify.css";
import { Route, Routes } from "react-router";
import Todo from "./components/Todo";
import Header from "./components/Header";
import Login from "./components/Auth/Login";
import Register from "./components/Auth/Register";
import Logout from "./components/Auth/Logout";
import RequireAuth from "./components/Auth/RequireAuth";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route
          path="/"
          element={
            <RequireAuth>
              <Todo />
            </RequireAuth>
          }
        />
        <Route path="/login" element={<Login />} />
        <Route path="/logout" element={<Logout />} />
        <Route path="/register" element={<Register />} />
      </Routes>
      <ToastContainer />
    </>
  );
}

export default App;
