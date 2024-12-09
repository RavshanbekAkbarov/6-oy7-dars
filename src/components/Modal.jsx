import React, { useEffect, useState } from "react";
function Madal({ t, editTodoChange }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const hendleSubmit = (e) => {
    e.preventDefault();
    editTodoChange({
      id: t.id,
      title,
      description,
    });

    document.getElementById("my_modal_5").close();
  };
  useEffect(() => {
    if (t) {
      setTitle(t.title);
      setDescription(t.description);
    }
  }, [t]);

  return (
    <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
      <div className="modal-box">
        <form onSubmit={hendleSubmit}>
          <label className="form-control mb-5 w-full">
            <div className="label">
              <span className="label-text">Title:</span>
            </div>
            <input
              onChange={(e) => setTitle(e.target.value)}
              type="text"
              placeholder="Title"
              value={title}
              className="input input-bordered w-full"
              required
            />
          </label>
          <label className="form-control mb-5 w-full">
            <span className="label-text my-2">Description:</span>
            <textarea
              onChange={(e) => setDescription(e.target.value)}
              className="textarea textarea-bordered my-2 w-full"
              placeholder="Description"
              value={description}
              required
            ></textarea>
          </label>
          <div className="modal-action flex gap-1">
            <button className="btn bg-green-500">Submit</button>
            <button
              type="button"
              onClick={() => document.getElementById("my_modal_5").close()}
              className="btn"
            >
              Close
            </button>
          </div>
        </form>
      </div>
    </dialog>
  );
}

export default Madal;
