import React from "react";
import { useDndContext } from "@dnd-kit/core";

const DraggableOverlayCard = (props: { id: string }) => {
  const { id } = props;

  function useDndIsReallyActiveId(id: string) {
    const context = useDndContext();
    const isActive = context.active?.id === id;
    return isActive;
  }

  // DragOver seems to cache this component so I can't tell if the item is still actually active
  // It will remain active until it has settled in place rather than when dragEnd has occured
  // I need to know when drag end has taken place to trigger the scale down animation
  // I use a hook which looks at DndContex to get active
  const isReallyActive = useDndIsReallyActiveId(id);

  return (
    <div
      style={{
        position: "relative",
        padding: "50%",
        background: "white",
        boxShadow: "0px 2px 4px rgba(0,0,0,0.15)",
        borderRadius: 10,
        display: "flex",
        justifyItems: "center",
        alignItems: "center",
        userSelect: "none",
        touchAction: "none",
        backgroundColor: id,
        height: "100%",
        // padding: 0,
        transform: isReallyActive ? "scale(1.05)" : "none",
      }}
    />
  );
};

export default DraggableOverlayCard;
