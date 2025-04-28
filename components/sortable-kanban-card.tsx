"use client"

import { useSortable } from "@dnd-kit/sortable"
import { CSS } from "@dnd-kit/utilities"
import { KanbanCard } from "./kanban-card"
import type { CardType } from "./kanban-board"

interface SortableKanbanCardProps {
  card: CardType
  index: number
  containerId: string
}

export function SortableKanbanCard({ card, index, containerId }: SortableKanbanCardProps) {
  const { attributes, listeners, setNodeRef, transform, transition, isDragging } = useSortable({
    id: card.id,
    data: {
      index,
      containerId,
    },
  })

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
    opacity: isDragging ? 0.5 : 1,
  }

  return (
    <div ref={setNodeRef} style={style} {...attributes} {...listeners}>
      <KanbanCard card={card} />
    </div>
  )
}
