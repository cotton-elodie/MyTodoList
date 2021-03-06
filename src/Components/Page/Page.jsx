import React, { useEffect } from "react";
import { useState } from "react";
import { Dialog, DialogFooter, DialogType } from "@fluentui/react/lib/Dialog";
import { TextField } from "@fluentui/react/lib/TextField";

import { PrimaryButton, DefaultButton } from "@fluentui/react/lib/Button";
import TaskList from "../TaskList/TaskList";

import "../Page/page.scss";
import { DatePicker } from "@fluentui/react";
import { initializeIcons } from '@fluentui/font-icons-mdl2';

initializeIcons();

const Page = () => {
  const [showModal, setShowModal] = useState(false);
  const [taskList, setTaskList] = useState([]);
  const [newTaskTitle, setNewTaskTitle] = useState("");
  const [newTaskDate, setNewTaskDate]= useState();

  const onDialogTaskTitleChange = (event, newvalue) => {
    setNewTaskTitle(newvalue);
  };

  const onCreateTask = () => {
    taskList.push({ complete: false, title: newTaskTitle, date: newTaskDate });
    setTaskList(taskList);
    setShowModal(false);
    setNewTaskTitle("");
    setNewTaskDate(null);
    localStorage.setItem("items", JSON.stringify(taskList));
  };

  const onTaskCompletChange = (index) => {
    const copy = taskList.slice();
    copy[index].complete = !copy[index].complete;
    setTaskList(copy);
    localStorage.setItem("items", JSON.stringify(copy));
  };

  const onTaskTitleChange = (index, newTitle) => {
    const copy = taskList.slice();
    copy[index].title = newTitle;
    setTaskList(copy);
    localStorage.setItem("items", JSON.stringify(copy));
  };

  const handleTaskDelete = (index) => {
    const copy = taskList.slice();
    copy.splice(index, 1);
    setTaskList(copy);
    localStorage.setItem("items", JSON.stringify(copy));
  };

  useEffect(() => {
    const items = JSON.parse(localStorage.getItem("items"));
    if (items) {
      setTaskList(items);
    }
  }, []);

  return (
    <div className="page">
      <div className="page-modal">
        <h1>Ma todo liste</h1>

        <>
          <PrimaryButton text="+" onClick={() => setShowModal(true)} />
          <Dialog
            hidden={!showModal}
            onDismiss={() => setShowModal(false)}
            dialogContentProps={{
              type: DialogType.largeHeader,
              title: "Nouvelle t??che",
            }}
          >
            <TextField
              label="Titre de la t??che"
              onChange={onDialogTaskTitleChange}
              require
              placeholder="Votre t??che"
            />
            <DatePicker
              isRequired
              label="Date d'??ch??ance"
              placeholder="Selection une date..."
              ariaLabel="Selection une date"
              onSelectDate ={(date)=>setNewTaskDate(date)}
              // className={styles.control}
              // DatePicker uses English strings by default. For localized apps, you must override this prop.
              // strings={defaultDatePickerStrings}
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
      <div className="page-taskList">
        <TaskList
          taskListArray={taskList}
          onTaskCompletChange={onTaskCompletChange}
          handleTaskDelete={handleTaskDelete}
          onTaskTitleChange={onTaskTitleChange}
        />
      </div>
    </div>
  );
};

export default Page;
