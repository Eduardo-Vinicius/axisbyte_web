"use client"

import KanbanBoard from "@/components/kanban-board"
import { getDictionary } from "@/i18n/dictionaries"
import { useParams } from "next/navigation";


export default async function Home() {
  const params = useParams();
  const locale = params?.locale || "pt"
  const dict = await getDictionary(locale as "pt" | "us")

  return (
    <main className="container mx-auto py-10 px-4">
      <h1 className="text-3xl font-bold mb-8 text-center">{dict.kanban.title}</h1>
      <KanbanBoard locale={locale as "pt" | "us"}/>
    </main>
  )
}
