import React, { useEffect, useState } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
// layouts
import MainLayouts from "./layouts/MainLayouts";

// pages
import Home from "./pages/Home";
import Create from "./pages/Create";
import ReadTodo from "./pages/ReadTodo";

const getTodosLocalStorage = () => {
  return JSON.parse(localStorage.getItem("todos")) || [];
};
function App() {
  const [todos, setTodos] = useState(getTodosLocalStorage());
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);
  const editTodoChange = (to) => {
    setTodos((prev) => {
      return prev.map((todo) => {
        if (todo.id == to.id) {
          return { ...to };
        } else {
          return todo;
        }
      });
    });
  };
  const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayouts />,
      children: [
        {
          index: true,
          element: (
            <Home
              editTodoChange={editTodoChange}
              todos={todos}
              setTodos={setTodos}
            />
          ),
        },
        {
          path: "/create",
          element: <Create setTodos={setTodos} />,
        },
        {
          path: "/read/:id",
          element: <ReadTodo todos={todos} />,
        },
      ],
    },
  ]);
  return (
    <>
      <div className="flex-col-reverse">
        <RouterProvider router={router} />
      </div>
    </>
  );
}

export default App;
