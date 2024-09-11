import { type Task, TaskStatus } from "../types";

export const initialTasks: Task[] = [
  {
    id: 1,
    title: "Task 1",
    description: "Description for Task 1",
    status: TaskStatus.ToDo,
  },
  {
    id: 2,
    title: "Task 2",
    description: "Description for Task 2",
    status: TaskStatus.ToDo,
  },
  {
    id: 3,
    title: "Task 3",
    description: "Description for Task 3",
    status: TaskStatus.InProgress,
  },
  {
    id: 4,
    title: "Task 4",
    description: "Description for Task 4",
    status: TaskStatus.InProgress,
  },
  {
    id: 5,
    title: "Task 5",
    description: "Description for Task 5",
    status: TaskStatus.InProgress,
  },
  {
    id: 6,
    title: "Task 6",
    description: "Description for Task 6",
    status: TaskStatus.Done,
  },
  {
    id: 7,
    title: "Task 7",
    description: "Description for Task 7",
    status: TaskStatus.Done,
  },
];
