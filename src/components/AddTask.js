
import React, { useEffect, useRef } from "react";
import './addtask.css';

const AddTask = (props) => {
    console.log("add",props);
  // using useRef hook for inputs
  const title = useRef();


  useEffect(() => {
    title.current.value = props.Edit.edit ? props.Edit.task.title : "";
  }, [props.Edit]);
  return (
  
    <div className="taskContainer">

      <form
        onSubmit={(e) => {
          e.preventDefault();
          props.addtask(title.current.value);
          title.current.value = "";
          console.log(props)
        }}
      >
        <div>
          <label>Title: </label>
          <br />
          <input ref={title} type="text" required />
        </div>
        <div>
          {/* checking for editing state or not */}
          {props.Edit.edit ? (
            <button
              type="button"
              onClick={() => {
                const task = props.Edit.task;
                task.title = title.current.value;
                props.updateHandle(task, false);
              }}
            >
              Save
            </button>
          ) : (
            <button type="submit">ADD TASK</button>
          )}
        </div>
      </form>
    </div>
  );
};

export default AddTask;
