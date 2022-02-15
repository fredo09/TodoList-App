/**
 *   Componente AddTask
 **/

import React, { useState } from "react";
import { isEmpty } from "lodash";
import { Form, Button } from "react-bootstrap";
import firebase from "./../../utils/Firebase";
import "firebase/firestore";
import { ReactComponent as Send } from "./../../assets/send.svg";

import "./AddTask.scss";

//Inicializando firebase DB
const db = firebase.firestore(firebase);

export const AddTask = () => {
  const [task, setTask] = useState("");

  const onSubmit = (e) => {
    console.log("Formulario ok");
    e.preventDefault();

    if (!isEmpty(task)) {
      //enviamos la tarea a firebase
      db.collection("tasks")
        .add({
          name: task,
          completed: false,
        })
        .then(() => {
          console.info("Tarea creada!");
        });
    }
  };

  return (
    <Form onSubmit={onSubmit} className="add-task">
      <input
        type="text"
        placeholder="Nueva Tarea"
        onChange={(e) => setTask(e.target.value)}
      />
      <Button type="submit">
        <Send />
      </Button>
    </Form>
  );
};
