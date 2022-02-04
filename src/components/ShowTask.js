import classes from "./ShowTask.module.css";
import Button from "./UI/Button";

const ShowTask = (props) => {
  return (
    <div className={classes.output}>
      <ul>
        {props.tasks.map((task) => (
          <li key={task.id}>
            {task.taskText} <Button className={classes.btn}>x</Button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ShowTask;
