import React, { useState } from "react";
import { Checkbox } from "@fluentui/react";

import "../TaskItem/taskItem.scss";

const TaskItem = ({ index, isComplete, title, onTaskCompletChange }) => {
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
    </div>
  );
};

export default TaskItem;
