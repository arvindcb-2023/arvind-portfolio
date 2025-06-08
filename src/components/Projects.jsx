import React from 'react';

const Projects = () => {
  const projects = [
    {
      title: 'Multi-omics Cancer Classification',
      description: 'GAT + DMCCA for BRCA/BLCA tumor subtype prediction using integrated omics data.',
      tech: ['GAT', 'DMCCA', 'Python'],
      code: 'https://github.com/arvindcb-2023/cancer-analysis',
    },
    {
      title: 'Assignment Grader (NLP)',
      description: 'Auto-grades subjective answers using BERT embeddings and cosine similarity.',
      tech: ['BERT', 'Flask', 'NLP'],
      code: 'https://github.com/arvindcb-2023/assignment-grader',
    },
    {
      title: 'YouTube Analytics Dashboard',
      description: 'Spark + Flask-based dashboard to analyze YouTube video trends and metrics.',
      tech: ['Apache Spark', 'Flask', 'Pandas'],
    },
    {
      title: 'Portfolio Website',
      description: 'My personal website built with React and Bootstrap, fully responsive.',
      tech: ['React', 'Bootstrap'],
      code: 'https://github.com/arvindcb-2023/portfolio',
    },
    {
      title: 'Firebase Auth UI',
      description: 'Frontend UI for Firebase email/password login system with error handling.',
      tech: ['React', 'Firebase'],
    },
    {
      title: 'Cancer TMB Prediction',
      description: 'Graph-based model to classify tumor mutational burden levels from omics data.',
      tech: ['Graph Neural Networks', 'TCGA'],
    },
  ];

  return (
    <section
        id="projects"
        className="w-100 text-white"
        style={{ backgroundColor: '#121212', padding: '4rem 1rem', minHeight: '100vh' }}
    >

      <div className="container" style={{ maxWidth: '960px' }}>
        <h2 className="text-center mb-5">Projects</h2>

        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-4">
          {projects.map((project, index) => (
            <div className="col" key={index}>
              <div
                className="card bg-dark text-white h-100 shadow"
                style={{ aspectRatio: '1 / 1', overflow: 'hidden' }}
              >
                <div className="card-body d-flex flex-column justify-content-between">
                  <div>
                    <h5 className="card-title">{project.title}</h5>
                    <p className="card-text small">{project.description}</p>
                  </div>
                  <div className="mt-3">
                    <div className="d-flex flex-wrap gap-2 mb-2">
                      {project.tech.map((tech, i) => (
                        <span key={i} className="badge bg-secondary">{tech}</span>
                      ))}
                    </div>
                    {project.code && (
                      <a
                        href={project.code}
                        target="_blank"
                        rel="noreferrer"
                        className="btn btn-sm btn-outline-light"
                      >
                        View Code
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
