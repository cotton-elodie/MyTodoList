import TagItem from "../TaskItem/TaskItem";
import React from "react";

import "../TaskList/taskList.scss";

const TaskList = ({ taskListArray, onTaskCompletChange,handleTaskDelete }) => {
  

  return (
    <div className="taskList">
      {taskListArray.map((task, index) => (
        <TagItem
          className="taskList-item"
          key={index}
          index={index}
          isComplete={task.complete}
          title={task.title}
          date= {task.date}
          onTaskCompletChange={onTaskCompletChange}
          handleTaskDelete={handleTaskDelete}
          // onTaskTitleChange={onTaskTitleChange}
        />
      ))}
    </div>
  );
};
export default TaskList;
