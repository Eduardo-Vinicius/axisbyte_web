"use client"

import { useState, useEffect } from "react"
import {
  DndContext,
  type DragEndEvent,
  DragOverlay,
  type DragStartEvent,
  PointerSensor,
  useSensor,
  useSensors,
} from "@dnd-kit/core"
import { arrayMove } from "@dnd-kit/sortable"
import { KanbanColumn } from "./kanban-column"
import { KanbanCard } from "./kanban-card"
import { Progress } from "@/components/ui/progress"
import { Locale } from "@/i18n/config"
import { getDictionary } from "@/i18n/dictionaries"

export type CardType = {
  id: string
  title: string
  description: string
}

export type ColumnType = {
  id: string
  title: string
  cards: CardType[]
}

interface KanbanBoardProps {
  locale: Locale
}

export default function KanbanBoard({ locale }: KanbanBoardProps) {
  const [columns, setColumns] = useState<ColumnType[]>([])
  const [activeCard, setActiveCard] = useState<CardType | null>(null)
  const [progress, setProgress] = useState(0)
  const [dict, setDict] = useState<any>(null)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    async function initialize() {
      try {
        setIsLoading(true)
        const loadedDict = await getDictionary(locale as "pt" | "us")
        setDict(loadedDict)

        const res = await fetch("/api/kanban-cards")
        const data = await res.json()

        const loadedColumns: ColumnType[] = [
          {
            id: "todo",
            title: loadedDict.kanban.columns.todo,
            cards: data.todo || [],
          },
          {
            id: "in-progress",
            title: loadedDict.kanban.columns.inProgress,
            cards: data.inProgress || [],
          },
          {
            id: "done",
            title: loadedDict.kanban.columns.done,
            cards: data.done || [],
          },
        ]

        setColumns(loadedColumns)
      } catch (error) {
        console.error("Failed to load Kanban data:", error)
      } finally {
        setIsLoading(false)
      }
    }

    initialize()
  }, [locale])

  useEffect(() => {
    if (columns.length === 0) return

    const totalCards = columns.reduce((total, column) => total + column.cards.length, 0)
    const doneCards = columns.find((col) => col.id === "done")?.cards.length || 0
    const calculatedProgress = totalCards > 0 ? Math.round((doneCards / totalCards) * 100) : 0

    setProgress(calculatedProgress)
  }, [columns])

  const sensors = useSensors(
    useSensor(PointerSensor, {
      activationConstraint: {
        distance: 8,
      },
    })
  )

  const handleDragStart = (event: DragStartEvent) => {
    const { active } = event
    const activeColumnId = active.data.current?.sortable.containerId

    const activeColumn = columns.find((col) => col.id === activeColumnId)
    if (!activeColumn) return

    const activeCardIndex = active.data.current?.sortable.index
    const card = activeColumn.cards[activeCardIndex]

    setActiveCard(card)
  }

  const handleDragEnd = (event: DragEndEvent) => {
    const { active, over } = event

    if (!over) {
      setActiveCard(null)
      return
    }

    const activeColumnId = active.data.current?.sortable.containerId
    const overColumnId = over.data.current?.sortable.containerId || over.id

    const activeCardIndex = active.data.current?.sortable.index

    if (activeColumnId === overColumnId) {
      const overCardIndex = over.data.current?.sortable.index

      if (activeCardIndex !== overCardIndex) {
        setColumns((prevColumns) =>
          prevColumns.map((column) => {
            if (column.id !== activeColumnId) return column

            const newCards = arrayMove(column.cards, activeCardIndex, overCardIndex)

            return {
              ...column,
              cards: newCards,
            }
          })
        )
      }
    } else {
      setColumns((prevColumns) => {
        const sourceColumn = prevColumns.find((col) => col.id === activeColumnId)
        const destColumn = prevColumns.find((col) => col.id === overColumnId)

        if (!sourceColumn || !destColumn) return prevColumns

        const cardToMove = sourceColumn.cards[activeCardIndex]

        const sourceCards = [...sourceColumn.cards]
        sourceCards.splice(activeCardIndex, 1)

        const destCards = [...destColumn.cards]

        if (over.data.current?.sortable) {
          const overCardIndex = over.data.current.sortable.index
          destCards.splice(overCardIndex, 0, cardToMove)
        } else {
          destCards.push(cardToMove)
        }

        return prevColumns.map((column) => {
          if (column.id === activeColumnId) {
            return {
              ...column,
              cards: sourceCards,
            }
          }
          if (column.id === overColumnId) {
            return {
              ...column,
              cards: destCards,
            }
          }
          return column
        })
      })
    }

    setActiveCard(null)
  }

  if (isLoading) {
    return <div>Loading...</div>
  }

  if (!dict) {
    return <div>Failed to load translations</div>
  }

  return (
    <div className="space-y-6">
      <div className="space-y-2">
        <div className="flex justify-between items-center">
          <h2 className="text-lg font-medium">{dict.kanban.progress}</h2>
          <span className="text-sm font-medium">{progress}%</span>
        </div>
        <Progress value={progress} className="h-2" />
      </div>

      <DndContext sensors={sensors} onDragStart={handleDragStart} onDragEnd={handleDragEnd}>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {columns.map((column) => (
            <KanbanColumn key={column.id} column={column} />
          ))}
        </div>

        <DragOverlay>{activeCard ? <KanbanCard card={activeCard} /> : null}</DragOverlay>
      </DndContext>
    </div>
  )
}
