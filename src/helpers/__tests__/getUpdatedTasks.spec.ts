import getUpdatedTasks from "../getUpdatedTasks";
import type { DropResult } from "@hello-pangea/dnd";
import { type Task, TaskStatus } from "../../types";
import getTasksByStatus from "../getTasksByStatus";
import {
  doneTask,
  firstToDoTask,
  inProgressTask,
  secondToDoTask,
} from "../mocks/tasks";

describe("getUpdatedTasks", () => {
  const initialTasks: Task[] = [
    firstToDoTask,
    secondToDoTask,
    inProgressTask,
    doneTask,
  ];

  it("should return undefined if dropped outside a droppable area", () => {
    const result: DropResult = {
      combine: null,
      destination: null,
      draggableId: "1",
      mode: "FLUID",
      reason: "DROP",
      source: { droppableId: TaskStatus.ToDo, index: 0 },
      type: "DEFAULT",
    };

    const updatedTasks = getUpdatedTasks(initialTasks, result);
    expect(updatedTasks).toBeUndefined();
  });

  it("should return undefined if dropped in the same place", () => {
    const result: DropResult = {
      combine: null,
      destination: { droppableId: TaskStatus.ToDo, index: 0 },
      draggableId: "1",
      mode: "FLUID",
      reason: "DROP",
      source: { droppableId: TaskStatus.ToDo, index: 0 },
      type: "DEFAULT",
    };

    const updatedTasks = getUpdatedTasks(initialTasks, result);
    expect(updatedTasks).toBeUndefined();
  });

  it("should update the task order when moving a task within the same column", () => {
    const result: DropResult = {
      combine: null,
      destination: { droppableId: TaskStatus.ToDo, index: 1 },
      draggableId: "1",
      mode: "FLUID",
      reason: "DROP",
      source: { droppableId: TaskStatus.ToDo, index: 0 },
      type: "DEFAULT",
    };

    const updatedTasks = getUpdatedTasks(initialTasks, result);
    expect(updatedTasks).toEqual([
      secondToDoTask,
      firstToDoTask,
      inProgressTask,
      doneTask,
    ]);
  });

  it("should update the task status when moving a task to a different column", () => {
    const result: DropResult = {
      combine: null,
      destination: { droppableId: TaskStatus.InProgress, index: 0 },
      draggableId: "1",
      mode: "FLUID",
      reason: "DROP",
      source: { droppableId: TaskStatus.ToDo, index: 0 },
      type: "DEFAULT",
    };

    const updatedTasks = getUpdatedTasks(initialTasks, result)!;
    expect(updatedTasks).toEqual([
      secondToDoTask,
      {
        ...firstToDoTask,
        status: TaskStatus.InProgress,
      },
      inProgressTask,
      doneTask,
    ]);
  });
});
