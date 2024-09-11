import type { Task } from "../types";

export default function getTasksByStatus(
  tasks: Task[],
  status: Task["status"]
): Task[] {
  return tasks.filter((task) => task.status === status);
}
