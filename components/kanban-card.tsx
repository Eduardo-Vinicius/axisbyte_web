"use client"

import type { CardType } from "./kanban-board"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

interface KanbanCardProps {
  card: CardType
}

export function KanbanCard({ card }: KanbanCardProps) {
  return (
    <Card className="cursor-grab active:cursor-grabbing">
      <CardHeader className="p-3 pb-0">
        <CardTitle className="text-sm font-medium">{card.title}</CardTitle>
      </CardHeader>
      <CardContent className="p-3 pt-1 text-xs text-muted-foreground">{card.description}</CardContent>
    </Card>
  )
}
