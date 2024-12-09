import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import React from "react";

function ReadTodo({ todos }) {
  const { id } = useParams();
  const [info, setInfo] = useState(null);
  useEffect(() => {
    setInfo(todos.find((todo) => todo.id == Number(id)));
  }, [id]);
  return (
    <div className="m-auto mt-14 w-96 rounded-lg border-r-4 bg-red-400 p-4 text-center">
      {info && (
        <>
          <h1 className="text-lg underline-offset-8">{info.title}</h1>
        </>
      )}
      {info && (
        <>
          <p className="text-start">{info.description}</p>
        </>
      )}
    </div>
  );
}

export default ReadTodo;
