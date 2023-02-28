// importing React from react
import React from "react";
import './showtask.css';
const ShowTask = (props) => {
    // console.log(props)
  return (
    <div className="taskBox">
      {/* mapping over all the post and rendering all the data */}
      {props?.todo?.map((post) => {
        return (
          <div key={post.id} className="task">
            <h2>{post.title}</h2>
            <div className="icons">
              <ion-icon
                onClick={() => {
                  props.updateHandle(post, true);
                }}
                name="create-outline"
              ></ion-icon>
              <ion-icon
                onClick={() => {
                  props.delete(post.id);
                }}
                name="trash-outline"
              ></ion-icon>
            </div>
          </div>
        );
      })}
    </div>
  );
};

// exporting the ShowTask component by default
export default ShowTask;
