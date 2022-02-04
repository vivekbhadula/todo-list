import { useRef } from "react";
import classes from "./NewTask.module.css";
import Button from "./UI/Button";

const NewTask = () => {
  const taskRef = useRef();

  const formSubmitHandler = (event) => {
    event.preventDefault();
    const enteredTask = taskRef.current.value;
    if (enteredTask.trim().length > 0) {
      console.log("Got it!");
    }
    event.target.reset();
  };

  return (
    <form onSubmit={formSubmitHandler} className={classes.form}>
      <input placeholder="Enter your task" ref={taskRef} className={classes.input}></input>
      <Button>+</Button>
    </form>
  );
};

export default NewTask;
