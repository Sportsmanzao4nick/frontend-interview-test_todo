/* VENDOR */
import React from "react";

/* APPLICATION */
import { ListItem } from "../components/Lists/ListItem";
import { selectAllTasks } from "../store/reducers/tasksSlice";
import {useAppSelector} from "../store/hooks";

export const Tasks: React.FC = () => {
  const tasks = useAppSelector(selectAllTasks);

  console.log(tasks);

  return (
    <ul>
      {tasks.map((task) => (
        <ListItem key={task.id} item={task} />
      ))}
    </ul>
  );
};

// можно попробовать вынести svg в отдельный файл в виде кода
