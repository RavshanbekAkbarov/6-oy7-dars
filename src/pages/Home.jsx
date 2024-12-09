import React from "react";
import { Link } from "react-router-dom";
import { IoTrashBin } from "react-icons/io5";
import { MdModeEditOutline } from "react-icons/md";
import Madal from "../components/Modal";
import { useState } from "react";

function Home({ todos, setTodos, editTodoChange }) {
  const [todoId, setTodoId] = useState(null);
  const [todo, setTodo] = useState(null);
  const todosDelete = (id) => {
    setTodos((prev) => {
      return prev.filter((us) => {
        return us.id !== id;
      });
    });
  };
  return (
    <>
      <div className="mx-auto my-10 grid max-w-5xl">
        <ul className="grid grid-cols-3 gap-8">
          <Madal t={todo} editTodoChange={editTodoChange} />
          {todos.map((todo) => {
            return (
              <li
                key={todo.id}
                className="card w-full bg-base-100 shadow duration-500"
              >
                <div className="card-body">
                  <h2 className="card-title">{todo.title}</h2>
                  <p>{todo.description.slice(0, 60)}...</p>
                  <div className="card-actions items-center justify-end">
                    <button
                      onClick={() => {
                        setTodoId(todo.id);
                        setTodo(todo);
                        document.getElementById("my_modal_5").showModal();
                      }}
                      className="btn btn-outline btn-warning btn-sm duration-500"
                    >
                      <MdModeEditOutline />
                    </button>
                    <Link
                      to={`/read/${todo.id}`}
                      className="btn btn-warning btn-sm duration-500"
                    >
                      Read
                    </Link>
                    <IoTrashBin
                      onClick={() => todosDelete(todo.id)}
                      className="icon btn-outline btn-error h-5 w-5 duration-500"
                    />
                  </div>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
}

export default Home;
