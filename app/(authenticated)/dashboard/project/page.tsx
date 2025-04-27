"use client";

import React from 'react';
import { useRouter } from 'next/navigation';  // Use o useRouter de next/navigation
import styles from './Projects.module.css';

const projects = [
  { id: 1, name: 'Projeto 1', description: 'Descrição do Projeto 1', image: '/images/projeto1.jpg' },
  { id: 2, name: 'Projeto 2', description: 'Descrição do Projeto 2', image: '/images/projeto2.jpg' },
  { id: 3, name: 'Projeto 3', description: 'Descrição do Projeto 3', image: '/images/projeto3.jpg' },
  { id: 4, name: 'Projeto 4', description: 'Descrição do Projeto 4', image: '/images/projeto4.jpg' },
];

const ProjectsPage = () => {
  const router = useRouter();  // Inicializando o useRouter de next/navigation

  const handleCardClick = (projectID: number) => {
    router.push(`/dashboard/project/${projectID}`);  // Redireciona para o projeto específico
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Meus Projetos</h1>
      <div className={styles.grid}>
        {projects.map((project) => (
          <div
            key={project.id}
            className={styles.card}
            onClick={() => handleCardClick(project.id)}  // Ação de clique
          >
            <img src={project.image} alt={project.name} className={styles.image} />
            <h3 className={styles.projectName}>{project.name}</h3>
            <p className={styles.projectDescription}>{project.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectsPage;
