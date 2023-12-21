import React from "react";
import TaskCard from "./TaskCard";
import "./TaskColumn.css";

const TaskColumn = ({
  columnName,
  columnIcon,
  tasks,
  status,
  handleDelete,
}) => {
  return (
    <section className="task_column">
      <h2 className="task_column_heading">
        <img className="task_column_icon" src={columnIcon} alt=""></img>
        {columnName}
      </h2>
      {tasks.map(
        (task, index) =>
          task.status === status && (
            <TaskCard
              key={index}
              title={task.task}
              tags={task.tags}
              handleDelete={handleDelete}
              index={index}
            />
          )
      )}
    </section>
  );
};

export default TaskColumn;
