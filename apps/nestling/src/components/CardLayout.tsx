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

import shuffle from "lodash/shuffle";

// import styles from "./Styles";
import DraggableOverlayCard from "./DraggableOverlayCard";
import DraggableCard from "./DraggableCard";

function generateRandomHexCode() {
  let n = (Math.random() * 0xfffff * 1000000).toString(16);
  return "#" + n.slice(0, 6);
}

const initialItems = [...Array(30).keys()].map(() => generateRandomHexCode());

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
      <div style={{ padding: 16 }}>
        <button
          style={{ marginRight: 16 }}
          onClick={() => {
            setItems(shuffle(items));
          }}
        >
          Shuffle items
        </button>

        <input
          type="range"
          value={columnCount}
          min={4}
          max={16}
          onChange={(event) => {
            setColumnCount(event.target.value as any as number);
          }}
        />
      </div>

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
              padding: 48,
              gridTemplateColumns: `repeat(${columnCount}, 1fr)`,
            }}
          >
            {items.map((id) => (
              <DraggableCard key={id} id={id} activeId={activeId} />
            ))}
          </div>
        </SortableContext>

        <DragOverlay>
          {activeId ? <DraggableOverlayCard id={activeId} /> : null}
        </DragOverlay>
      </DndContext>
    </>
  );
};

export default CardLayout;
