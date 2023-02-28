//In this component Implement the post ,update and delete request

// given url
const url = `https://jsonplaceholder.typicode.com/todos`;

//function to fetch all the given data

const fetchData = async () => {
  let res = [];
  try {
    const apiRequest = await fetch(`${url}?userId=1`);
    res = await apiRequest.json();
    return {
      res,
      success: true,
    };
  } catch (error) {
    return {
      success: false,
      message: error.message,
    };
  }
};

//create new task
const newTask = async (title, userId) => {
  let id=200;
  try {
    const apiRequest = await fetch(url, {
      method: "POST",
      body: JSON.stringify({
        title,
        userId,
        completed: false,
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    });
    const res = await apiRequest.json();
    res.id=id++;
    console.log("new task",res);
    return {
      success: true,
      res,
    };
  } catch (error) {
    // catching an error
    return {
      success: false,
      message: error.message,
    };
  }
};

//update the task

const updateTask = async (task) => {
  try {
    const apiRequest = await fetch(`${url}/${task.id}`, {
      method: "PATCH",
      body: JSON.stringify(task),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    });
    const res = await apiRequest.json();
    return {
      success: true,
      res,
    };
  } catch (error) {
    return {
      success: false,
      message: error.message,
    };
  }
};

//deleting task
const deleteTask = async (id) => {
  try {
    const apiRequest = await fetch(`${url}/${id}`, {
      method: "DELETE",
    });
    return {
      success: true,
    };
  } catch (error) {
    return {
      success: false,
      message: error.message,
    };
  }
};
export {fetchData,newTask,updateTask,deleteTask};