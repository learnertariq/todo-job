import { ToastContainer } from "react-toastify";
import "./App.css";
import "react-toastify/dist/ReactToastify.css";
import { Route, Routes } from "react-router";
import Todo from "./components/Todo";
import Header from "./components/Header";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Todo />} />
      </Routes>
      <ToastContainer />
    </>
  );
}

export default App;
