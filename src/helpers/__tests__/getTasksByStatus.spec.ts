import getTasksByStatus from "../getTasksByStatus";
import { type Task, TaskStatus } from "../../types";
import {
  doneTask,
  firstToDoTask,
  inProgressTask,
  secondToDoTask,
} from "../mocks/tasks";

describe("getTasksByStatus", () => {
  const initialTasks: Task[] = [
    firstToDoTask,
    secondToDoTask,
    inProgressTask,
    doneTask,
  ];

  it("should return tasks with status 'To Do'", () => {
    const result = getTasksByStatus(initialTasks, TaskStatus.ToDo);
    expect(result).toEqual([firstToDoTask, secondToDoTask]);
  });

  it("should return tasks with status 'In Progress'", () => {
    const result = getTasksByStatus(initialTasks, TaskStatus.InProgress);
    expect(result).toEqual([inProgressTask]);
  });

  it("should return tasks with status 'Done'", () => {
    const result = getTasksByStatus(initialTasks, TaskStatus.Done);
    expect(result).toEqual([doneTask]);
  });

  it("should return an empty array if no tasks match the status", () => {
    const result = getTasksByStatus(
      initialTasks,
      "Invalid Status" as Task["status"]
    );
    expect(result).toEqual([]);
  });
});
