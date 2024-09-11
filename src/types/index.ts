export enum TaskStatus {
  ToDo = "To Do",
  InProgress = "In Progress",
  Done = "Done",
}

export interface Task {
  id: number;
  title: string;
  description: string;
  status: TaskStatus;
}
