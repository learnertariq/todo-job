import "./App.css";
import AddTask from "./components/AddTask";

import TodoTable from "./components/TodoTable";

function App() {
  return (
    <section className="mx-auto" style={{ maxWidth: "500px" }}>
      <h1 className="text-center text-primary">Todo App</h1>
      <AddTask />
      <TodoTable />
    </section>
  );
}

export default App;
