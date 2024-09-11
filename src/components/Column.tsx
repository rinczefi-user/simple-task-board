// src/components/Column.tsx
import React from "react";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import { Droppable } from "@hello-pangea/dnd";
import TaskCard from "./TaskCard";
import type { Task } from "../types";

interface Props {
  title: string;
  tasks: Task[];
  columnId: string;
}

const Column: React.FC<Props> = ({ title, tasks, columnId }) => {
  return (
    <Paper sx={{ width: 300, padding: 2, margin: 1 }}>
      <Typography variant="h5" align="center" gutterBottom>
        {title}
      </Typography>
      <Droppable droppableId={columnId}>
        {(provided) => (
          <div
            {...provided.droppableProps}
            ref={provided.innerRef}
            style={{ minHeight: 100 }}
          >
            {tasks.map((task, index) => (
              <TaskCard key={task.id} task={task} index={index} />
            ))}
            {provided.placeholder}
          </div>
        )}
      </Droppable>
    </Paper>
  );
};

export default Column;
