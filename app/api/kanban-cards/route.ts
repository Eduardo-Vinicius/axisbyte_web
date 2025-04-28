// app/api/kanban-cards/route.ts (Next.js 13/14 com App Router)

import { NextResponse } from "next/server"

export async function GET() {
    console.log('====================================');
    console.log("kanban get");
    console.log('====================================');
  return NextResponse.json({
    todo: [
      { id: "task-1", title: "Criar Estrutura", description: "Configurar o repositório." },
      { id: "task-2", title: "Tela de Login", description: "Construir a tela inicial de login." },
    ],
    inProgress: [
      { id: "task-3", title: "Conectar API", description: "Integrar frontend com backend." }
    ],
    done: [
      { id: "task-4", title: "Layout Responsivo", description: "Ajustar para mobile e desktop." }
    ]
  })
}
