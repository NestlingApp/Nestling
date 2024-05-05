// @ts-nocheck

import React from "react";
import { useSortable } from "@dnd-kit/sortable";
import { motion } from "framer-motion";

const DraggableCard = ({ id, activeId, children }) => {
  const sortable = useSortable({
    id,
  });

  const {
    setNodeRef,
    attributes,
    listeners,
    isDragging,
    transform,
    transition,
  } = sortable;

  return (
    <motion.div
      layoutId={id}
      transition={{
        type: "spring",
        duration: activeId ? 0 : 0.6,
      }}
      ref={setNodeRef}
      style={{
        position: "relative",
        boxShadow: "0px 2px 4px rgba(0,0,0,0.15)",
        borderRadius: 10,
        display: "flex",
        justifyItems: "center",
        alignItems: "center",
        userSelect: "none",
        touchAction: "none",
        gridColumn: id % 2 ? "span 1" : "span 1",
        transform: transform
          ? `translate(${transform.x}px, ${transform.y}px)`
          : "none",
        transition,
      }}
      {...attributes}
      {...listeners}
    >
      {/* Need to keep the opacity out of the motion div or else it doesn't update properly */}
      <div
        style={{
          width: "100%",
          opacity: isDragging ? 0.5 : 1,
        }}
      >
        {children}
      </div>
    </motion.div>
  );
};

export default DraggableCard;
