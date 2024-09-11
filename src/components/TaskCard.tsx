// src/components/TaskCard.tsx
import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { Draggable } from "@hello-pangea/dnd";
import type { Task } from "../types";

interface Props {
  task: Task;
  index: number; // Required for draggable item
}

const TaskCard: React.FC<Props> = ({ task, index }) => {
  return (
    <Draggable draggableId={task.id.toString()} index={index}>
      {(provided) => (
        <div
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          style={{ marginBottom: "8px", ...provided.draggableProps.style }}
        >
          <Card>
            <CardContent>
              <Typography variant="h6" component="div">
                {task.title}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {task.description}
              </Typography>
            </CardContent>
          </Card>
        </div>
      )}
    </Draggable>
  );
};

export default TaskCard;
