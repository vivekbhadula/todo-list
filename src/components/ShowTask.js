import classes from "./ShowTask.module.css";

const ShowTask = (props) => {
  return (
    <div className={classes.output}>
      <ul>
        {props.tasks.map((task) => (
          <li key={task.id}>{task.taskText}</li>
        ))}
      </ul>
    </div>
  );
};

export default ShowTask;
