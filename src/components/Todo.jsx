import React from "react";
import { useQuery } from "react-query";
import http from "../service/http";
import AddTask from "./AddTask";
import TodoTable from "./TodoTable";

const Todo = () => {
  const { isLoading, error, data, refetch } = useQuery(
    "tasks",
    async () => await http.get("/tasks")
  );

  return (
    <section className="mx-auto mt-3" style={{ maxWidth: "500px" }}>
      <h1 className="text-center text-primary">Todo App</h1>
      <TodoTable
        data={data?.data}
        isLoading={isLoading}
        error={error}
        refetch={refetch}
      />
      <AddTask refetch={refetch} />
    </section>
  );
};

export default Todo;
