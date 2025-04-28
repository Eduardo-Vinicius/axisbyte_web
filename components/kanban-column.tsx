"use client"

import { useDroppable } from "@dnd-kit/core"
import { SortableContext, verticalListSortingStrategy } from "@dnd-kit/sortable"
import { SortableKanbanCard } from "./sortable-kanban-card"
import type { ColumnType } from "./kanban-board"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

interface KanbanColumnProps {
  column: ColumnType
}

export function KanbanColumn({ column }: KanbanColumnProps) {
  const { setNodeRef } = useDroppable({
    id: column.id,
  })

  return (
    <Card className="h-full">
      <CardHeader className="pb-2">
        <CardTitle className="text-lg">
          {column.title} ({column.cards.length})
        </CardTitle>
      </CardHeader>
      <CardContent>
        <SortableContext
          id={column.id}
          items={column.cards.map((card) => card.id)}
          strategy={verticalListSortingStrategy}
        >
          <div ref={setNodeRef} className="space-y-3 min-h-[200px]">
            {column.cards.map((card, index) => (
              <SortableKanbanCard key={card.id} card={card} index={index} containerId={column.id} />
            ))}
          </div>
        </SortableContext>
      </CardContent>
    </Card>
  )
}
