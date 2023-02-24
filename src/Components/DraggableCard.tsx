import { Draggable } from "react-beautiful-dnd";
import styled from "styled-components";
import React from "react";

const Card = styled.div<{ isDragging: boolean }>`
  background-color: ${(props) => (props.isDragging ? "#74b9ff" : props.theme.cardColor)};
  padding: 10px 10px;
  border-radius: 5px;
  margin-bottom: 8px;
  box-shadow: ${(props) => (props.isDragging ? "0px 2px 5px rgba(0, 0, 0, 0.1)" : "none")};
`;

interface IDraggableProps {
  toDo: string;
  index: number;
}

function DraggableCard({ toDo, index }: IDraggableProps) {
  //   console.log(toDo, "has been rendered.");
  return (
    <Draggable draggableId={toDo} index={index} key={toDo}>
      {(provided, snapshot) => (
        <Card
          isDragging={snapshot.isDragging}
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
        >
          {toDo}
        </Card>
      )}
    </Draggable>
  );
}

export default React.memo(DraggableCard);