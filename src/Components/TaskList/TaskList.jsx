import  TagItem  from "../TaskItem/TaskItem";
import React, { useEffect } from "react";

const TaskList = ({ taskListArray }) => {

  useEffect(()=>{
console.log('toto')
  },[taskListArray])

  return (
    <div className="taskList">
      {taskListArray.map((task, index) => (

          <TagItem
            key={index}
            isComplete={task.complete}
            title={task.title}
          />
      )
      
      )}
    </div>
  );
};

export default TaskList;

// { taskListArray, OnTaskCompletChange }