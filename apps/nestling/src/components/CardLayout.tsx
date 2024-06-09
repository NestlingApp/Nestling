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

import { RCAListing } from "data/reatlorca/types";
import layout from "./layout.json";

// import styles from "./Styles";
import DraggableOverlayCard from "./cards/DraggableOverlayCard";
import DraggableCard from "./cards/DraggableCard";
import SectionCard from "./SectionCard";
import OverviewMetricCard from "./cards/OverviewMetricCard";
import CardFactory from "./cards/CardFactory";
import MultiListCard from "./cards/MultiListCard";
import ListCard from "./cards/ListCard";

const initialItems = [...Array(30).keys()].map((i) => i + 1);

interface CardLayoutProps {
  data: RCAListing;
}
const CardLayout = ({ data }) => {
  const [items, setItems] = useState(initialItems);

  const [activeId, setActiveId] = useState(null);
  const [columnCount, setColumnCount] = useState(2);

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
              gridGap: 10,
              gridTemplateColumns: `${columnCount}fr 1fr`,
            }}
          >
            {layout.sections.map((section) => (
              <SectionCard key={section.title} title={section.title}>
                <div
                  style={{
                    display: "grid",
                    gridGap: 14,
                    gridRow: "auto auto",
                    gridTemplateColumns: section.gridTemplateColumns,
                  }}
                >
                  {section.cards.map((card: ICardConfig, idx: number) => (
                    <div key={`section-${idx}`}>
                      <ListCard />
                      <MultiListCard />
                      <CardFactory config={card} data={data[idx]} />
                    </div>
                  ))}
                </div>
              </SectionCard>
            ))}
          </div>
        </SortableContext>

        {/* <DragOverlay>
          {activeId ? (
            <DraggableOverlayCard id={activeId}>
              <SectionCard title={`Section #${activeId}`} />
            </DraggableOverlayCard>
          ) : null}
        </DragOverlay> */}
      </DndContext>
    </>
  );
};

export default CardLayout;
