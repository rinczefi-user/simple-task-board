import type { DropResult } from "@hello-pangea/dnd";
import type { Task } from "../types";

export default function getUpdatedTasks(
  tasks: Task[],
  result: DropResult
): Task[] | undefined {
  const { source, destination } = result;

  // If dropped outside a droppable area
  if (!destination) {
    return;
  }

  // If dropped in the same place
  if (
    destination.droppableId === source.droppableId &&
    destination.index === source.index
  ) {
    return;
  }

  const updatedTasks = structuredClone(tasks);

  // Find the first task's index in the source column
  const sourceIndex = updatedTasks.findIndex(
    (task) => task.status === source.droppableId
  );

  // Drag the task from the source column
  const [draggedTask] = updatedTasks.splice(sourceIndex + source.index, 1);

  // Update the status of the dragged task if it was moved to a different column
  if (source.droppableId !== destination.droppableId) {
    draggedTask.status = destination.droppableId as Task["status"];
  }

  // Find the first task's index in the destination column
  const destinationIndex = updatedTasks.findIndex(
    (task) => task.status === destination.droppableId
  );

  // Drop the task in the destination column
  updatedTasks.splice(destinationIndex + destination.index, 0, draggedTask);

  return updatedTasks;
}
