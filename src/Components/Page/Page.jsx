import React, { useEffect } from "react";
import { useState } from "react";
import { Dialog, DialogFooter, DialogType } from "@fluentui/react/lib/Dialog";
import { TextField } from "@fluentui/react/lib/TextField";

import { PrimaryButton, DefaultButton } from "@fluentui/react/lib/Button";
import TaskList from "../TaskList/TaskList";

import '../Page/page.scss'


const Page = () => {
  const [showModal, setShowModal] = useState(false);
  const [taskList, setTaskList] = useState([]);
  const [newTaskTitle, setNewTaskTitle] = useState("");

  const onTaskTitleChange = (event, newvalue) => {
    setNewTaskTitle(newvalue);
  };

  const onCreateTask = () => {
    const copy = taskList.slice();
    copy.push({ complete: false, title: newTaskTitle});
    setTaskList(copy);
    setShowModal(false);
    setNewTaskTitle("");
    localStorage.setItem('items',JSON.stringify(copy))
  };

  const onTaskCompletChange = (index)=>{
    const copy = taskList.slice();
    copy[index].complete = !copy[index].complete
    setTaskList(copy);
    localStorage.setItem('items',JSON.stringify(copy))
  };

  useEffect(() => {
    const items = JSON.parse(localStorage.getItem('items')) ;
    if (items) {
      setTaskList(items) ;
    }
  }, []);

  return (
    <div className="page" >
      <div className="page-modal" >
        <h1>Ma todo liste</h1>

        <>
          <PrimaryButton text="+" onClick={() => setShowModal(true)} />
          <Dialog
            hidden={!showModal}
            onDismiss={() => setShowModal(false)}
            dialogContentProps={{
              type: DialogType.largeHeader,
              title: "Nouvelle tâche",
            }}
          >
            <TextField
              label="Titre de la tâche"
              onChange={onTaskTitleChange}
              require
              placeholder="Votre tâche" 
            />
            <DialogFooter>
              <PrimaryButton onClick={onCreateTask} text="Valider" />
              <DefaultButton
                onClick={() => setShowModal(false)}
                text="Annuler"
              />
            </DialogFooter>
          </Dialog>
        </>
      </div>
      <div className="page-taskList" >
        <TaskList taskListArray={taskList} onTaskCompletChange={onTaskCompletChange}/>
      </div>
    </div>
  );
};

export default Page;
