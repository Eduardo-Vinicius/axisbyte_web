// app/dashboard/project/[projectID].tsx
"use client";

import React from 'react';
import { useParams } from 'next/navigation';  // Use useParams para acessar parâmetros dinâmicos

const ProjectDetailPage = () => {
  const { projectID } = useParams();  // Obtendo o ID do projeto da URL

  return (
    <div>
      <h1>Pagina kanban</h1>
    </div>
  );
};

export default ProjectDetailPage;
