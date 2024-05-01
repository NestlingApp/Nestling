// @ts-nocheck

import React, { useMemo, useState } from "react";
import { motion } from "framer-motion";
import {
  DndContext,
  DragEndEvent,
  closestCenter,
  DragOverlay,
  useDndContext,
  defaultDropAnimation,
  KeyboardSensor,
  PointerSensor,
  useSensor,
  useSensors,
} from "@dnd-kit/core";

import {
  SortableContext,
  useSortable,
  arrayMove,
  sortableKeyboardCoordinates,
} from "@dnd-kit/sortable";

// import styles from "./Styles";
import DraggableOverlayCard from "./DraggableOverlayCard";
import DraggableCard from "./DraggableCard";
import SectionCard from "./SectionCard";

const initialItems = [...Array(30).keys()].map((i) => i + 1);

const CardLayout = () => {
  const [items, setItems] = useState(initialItems);

  const [activeId, setActiveId] = useState(null);
  const [columnCount, setColumnCount] = useState(5);

  function handleDragStart({ active }) {
    setActiveId(active.id);
  }

  function handleDragEnd({ active, over }: DragEndEvent) {
    setActiveId(null);

    setItems((items) =>
      arrayMove(items, items.indexOf(active.id), items.indexOf(over?.id))
    );
  }

  const sensors = useSensors(
    useSensor(PointerSensor),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates,
    })
  );

  return (
    <>
      <DndContext
        sensors={sensors}
        onDragStart={handleDragStart}
        onDragEnd={handleDragEnd}
      >
        <SortableContext items={items}>
          <div
            style={{
              display: "grid",
              gridGap: 24,
              gridTemplateColumns: `repeat(${columnCount}, 1fr)`,
            }}
          >
            {items.map((id) => (
              <DraggableCard key={id} id={id} activeId={activeId}>
                <SectionCard title={`Section #${id}`} />
              </DraggableCard>
            ))}
          </div>
        </SortableContext>

        <DragOverlay>
          {activeId ? (
            <DraggableOverlayCard id={activeId}>
              <SectionCard title={`Section #${activeId}`} />
            </DraggableOverlayCard>
          ) : null}
        </DragOverlay>
      </DndContext>
    </>
  );
};

export default CardLayout;
