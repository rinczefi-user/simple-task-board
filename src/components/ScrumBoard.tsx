// src/components/ScrumBoard.tsx
import React, { useState } from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid2";
import { DragDropContext, type DropResult } from "@hello-pangea/dnd";
import Column from "./Column";
import { type Task, TaskStatus } from "../types";
import { initialTasks } from "../data/tasks";
import { getTasksByStatus, getUpdatedTasks } from "../helpers";

const ScrumBoard: React.FC = () => {
  const [tasks, setTasks] = useState<Task[]>(initialTasks);

  const onDragEnd = (result: DropResult) => {
    const updatedTasks = getUpdatedTasks(tasks, result);

    if (updatedTasks) {
      setTasks(updatedTasks);
    }
  };

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <Box sx={{ flexGrow: 1, padding: 2 }}>
        <Grid container spacing={2} justifyContent="center">
          <Column
            title={TaskStatus.ToDo}
            tasks={getTasksByStatus(tasks, TaskStatus.ToDo)}
            columnId={TaskStatus.ToDo}
          />
          <Column
            title={TaskStatus.InProgress}
            tasks={getTasksByStatus(tasks, TaskStatus.InProgress)}
            columnId={TaskStatus.InProgress}
          />
          <Column
            title={TaskStatus.Done}
            tasks={getTasksByStatus(tasks, TaskStatus.Done)}
            columnId={TaskStatus.Done}
          />
        </Grid>
      </Box>
    </DragDropContext>
  );
};

export default ScrumBoard;
