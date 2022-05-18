import { useQuery } from "react-query";
import "./App.css";
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
      <TodoTable data={data?.data} isLoading={isLoading} error={error} />
      <AddTask refetch={refetch} />
    </section>
  );
}

export default App;
