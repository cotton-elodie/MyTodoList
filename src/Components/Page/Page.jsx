import React from "react";
import { useState } from "react";
import { Dialog, DialogFooter, DialogType } from "@fluentui/react/lib/Dialog";
import { TextField } from "@fluentui/react/lib/TextField";

import { PrimaryButton, DefaultButton } from "@fluentui/react/lib/Button";

const Page = () => {
  const [showModal, setShowModal] = useState(false);
  const [taskList, setTaskList] = useState([]);
  const [newTaskTitle, setNewTaskTitle] = useState('');

  const onTaskTitleChange = (event, newvalue) => {
    setNewTaskTitle  (newvalue);
  };

  const onCreateTask = (event) => {
    taskList.push({ complete: false, title: newTaskTitle });
    setTaskList(taskList);

    setShowModal(false);
    setNewTaskTitle('');
  };

  return (
    <div>
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
          />
          <DialogFooter>
            <PrimaryButton onClick={onCreateTask} text="Valider" />
            <DefaultButton onClick={() => setShowModal(false)} text="Annuler" />
          </DialogFooter>
        </Dialog>
      </>
    </div>
  );
};

export default Page;
