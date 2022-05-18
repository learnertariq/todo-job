import { useQuery } from "react-query";
import { ToastContainer } from "react-toastify";
import "./App.css";
import "react-toastify/dist/ReactToastify.css";
import AddTask from "./components/AddTask";
import TodoTable from "./components/TodoTable";
import http from "./service/http";

function App() {
  const { isLoading, error, data, refetch } = useQuery(
    "tasks",
    async () => await http.get("/tasks")
  );

  return (
    <section className="mx-auto" style={{ maxWidth: "500px" }}>
      <h1 className="text-center text-primary">Todo App</h1>
      <TodoTable
        data={data?.data}
        isLoading={isLoading}
        error={error}
        refetch={refetch}
      />
      <AddTask refetch={refetch} />
      <ToastContainer />
    </section>
  );
}

export default App;
