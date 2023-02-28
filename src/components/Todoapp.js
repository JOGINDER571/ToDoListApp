import React, { useState, useEffect } from "react";
import { fetchData, newTask, updateTask, deleteTask } from "./Api";
import AddTask from "./AddTask";
import ShowTask from "./ShowTask";
import "./todoapp.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const Todoapp = () => {
  //states
  const [Loading, setLoading] = useState(true);

  const [Todo, setTodo] = useState([]);

  const [Edit, setEdit] = useState({
    edit: false,
    task: {},
  });

  // setting up the userId
  const userId = 1;

  //  updating the task
  async function updateHandle(task, requested) {
    console.log("task", task);
    if (requested) {
      setEdit({
        edit: true,
        task,
      });
      
      return;
    }

    const data = await updateTask(task);
    console.log(data)
    if (data.success) {
      toast("Updated Successfully");
    } else {
      toast("Updated Successfully");
    }
    setEdit({
      edit: false,
      task: {},
    });
  }

  // setting up functions for deleting a particular task
  async function deleteHandle(id) {
    const result = await deleteTask(id);
    if (result.success) {
      const todo = Todo.filter((data) => {
        return data.id !== id;
      });
      setTodo(todo);
      toast("Remove Successfully");
    } 
  }

  //function to add task
  const addData = async (title) => {
    const data = await newTask(title, userId);
    if (data.success) {
      setTodo([data.res, ...Todo]);
      toast("Added Successfully");
    } 
  };

  //getting all data
  useEffect(() => {
    async function post() {
      const data = await fetchData();
      if (data.success) {
        setLoading(false);
        setTodo(data.res);
       
      } else {
        setLoading(false);
      }
    }
    post();
  }, []);
  return (
    <>
      <div>
        <ToastContainer />
      </div>
      <div className="todotask">
        <h3>ToDoList</h3>
        <AddTask
          addtask={addData}
          Edit={Edit}
          updateHandle={() => updateHandle()}
        />
        {Loading ? (
          <p>no data</p>
        ) : (
          <ShowTask
            todo={Todo}
            delete={deleteHandle}
            // completed={completed}
            updateHandle={updateHandle}
          />
        )}
      </div>
    </>
  );
};

export default Todoapp;
