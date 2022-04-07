import React, { useState } from "react";
import { Checkbox } from "@fluentui/react";
import { ImBin2 } from "react-icons/im";

import "../TaskItem/taskItem.scss";

const TaskItem = ({
  index,
  isComplete,
  title,
  onTaskCompletChange,
  handleTaskDelete,
  // onTaskTitleChange,
}) => {
  const [taskComplet, setTaskComplet] = useState(isComplete);

  const onCompleteClick = (event, checked) => {
    setTaskComplet(checked);
    onTaskCompletChange(index);
  };

  return (
    <div className="taskitem">
      <Checkbox
        className={taskComplet ? "taskitem-complete" : "taskitem-checkbox"}
        label={title}
        checked={taskComplet}
        onChange={(event, checked) => onCompleteClick(event, checked)}
      />
      {/* <button onChange={()=>onTaskTitleChange(index, title)}></button> */}
      <button className="taskitem-button" onClick={() => handleTaskDelete(index)}>
        <ImBin2 />
      </button>

    </div>
  );
};

export default TaskItem;
