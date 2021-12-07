/**
 *   Componente AddTask
 **/

import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import { ReactComponent as Send } from "./../../assets/send.svg";

import "./AddTask.scss";

export const AddTask = () => {
  const [task, setTask] = useState("");

  const onSubmit = (e) => {
    console.log("Formulario ok");
    e.preventDefault();
    console.log(task);
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
