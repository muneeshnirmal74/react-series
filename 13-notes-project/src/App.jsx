import React from "react";
import { useState } from "react";

function App() {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [task, setTask] = useState([]);

  function formSubmit(e) {
    e.preventDefault();
    const newTask = [...task];
    newTask.push({ name, description });
    setTask(newTask);
    console.log(task);
    setName("");
    setDescription("");
  }

  function deleteCard(key) {
    const newTask = [...task];
    newTask.splice(key, 1);
    setTask(newTask);
  }

  return (
    <div className="lg:flex justify-center h-screen bg-black text-white w-full">
      <form
        onSubmit={formSubmit}
        className="flex  flex-col lg:w-1/2 md:w-1/1  gap-4 p-10"
      >
        <h1 className="text-4xl font-bold pb-5">Add Notes</h1>
        <input
          type="text"
          placeholder="Enter Name"
          className="px-5 w-full font-medium py-4 border-2 outline-none rounded"
          value={name}
          onChange={(e) => {
            setName(e.target.value);
          }}
        />
        <textarea
          type="text"
          placeholder="Enter Details"
          className="px-5 w-full font-medium py-2 h-32 border-2 outline-none rounded"
          value={description}
          onChange={(e) => {
            setDescription(e.target.value);
          }}
        ></textarea>
        <button className="bg-white active:scale-95 font-medium w-full outline-none  text-black px-5 py-4 rounded cursor-pointer ">
          Add Note
        </button>
      </form>
      <div className="lg:w-1/2  bg-gray-900 p-10">
        <h1 className="text-4xl font-bold pb-5">Your Notes</h1>
        <div className="flex flex-wrap gap-5 mt-5 overflow-auto">
          {task.map((val, key) => {
            return (
              <div
                key={key}
                className="h-50 w-40 bg-white p-2 rounded-[10px] flex flex-col justify-between"
              >
                <div>
                  <h1 className="font-medium text-2xl text-black mb-1">
                    {val.name}
                  </h1>
                  <p className="font-light text-black">{val.description}</p>
                </div>
                <button
                  onClick={() => {
                    deleteCard(key);
                  }}
                  className="w-full cursor-pointer active:scale-95 bg-red-500 py-1 text-xs rounded font-bold text-white"
                >
                  Delete
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default App;
