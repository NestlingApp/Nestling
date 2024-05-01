// @ts-nocheck

import React from "react";
import { useSortable } from "@dnd-kit/sortable";
import { motion } from "framer-motion";

const DraggableCard = ({ id, activeId }) => {
  function generateRandomHexCode() {
    let n = (Math.random() * 0xfffff * 1000000).toString(16);
    return "#" + n.slice(0, 6);
  }
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
        padding: "50%",
        background: "white",
        boxShadow: "0px 2px 4px rgba(0,0,0,0.15)",
        borderRadius: 10,
        display: "flex",
        justifyItems: "center",
        alignItems: "center",
        userSelect: "none",
        touchAction: "none",
        opacity: isDragging ? 0.5 : 1,
        gridColumn: id[1] > Number(5) ? "span 2" : undefined,
        backgroundColor: id,
        transform: transform
          ? `translate(${transform.x}px, ${transform.y}px)`
          : "none",
        transition,
      }}
      {...attributes}
      {...listeners}
    />
  );
};

export default DraggableCard;
