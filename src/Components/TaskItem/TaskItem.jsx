import { Label } from "@fluentui/react";
import React, { useState } from "react";

const TaskItem = ({ isComplete,title}) => {
  const [taskComplet, setTaskComplet] = useState(false);

  return (
    <div>
      <input
        type="checkbox"
        value={isComplete}
        onClick={() => setTaskComplet(true)}
      ></input>
      <Label>{title}</Label>
    </div>
  );
};

export default TaskItem;
