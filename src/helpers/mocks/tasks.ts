import { Task, TaskStatus } from "../../types";

export const firstToDoTask: Task = {
  description: "description for task 1",
  id: 1,
  status: TaskStatus.ToDo,
  title: "Task 1",
};

export const secondToDoTask: Task = {
  description: "description for task 2",
  id: 2,
  status: TaskStatus.ToDo,
  title: "Task 2",
};

export const inProgressTask: Task = {
  description: "description for task 3",
  id: 3,
  status: TaskStatus.InProgress,
  title: "Task 3",
};

export const doneTask: Task = {
  description: "description for task 4",
  id: 4,
  status: TaskStatus.Done,
  title: "Task 4",
};
