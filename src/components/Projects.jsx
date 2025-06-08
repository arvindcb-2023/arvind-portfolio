import React from 'react';

const Projects = () => {
  const projects = [
    {
      title: 'Portfolio Website',
      description: 'Responsive and interactive portfolio website developed using React, Tailwind CSS, and Bootstrap to showcase my projects, skills, and academic journey. Features include dynamic skill highlights, project sections, soft skills overview, and a clean, modern UI optimized for both desktop and mobile. Fully deployed to demonstrate frontend development and UI/UX design capabilities.',
      tech: ['React', 'Bootstrap'],
      code: 'https://github.com/arvindcb-2023/arvind-portfolio',
    },
    {
      title: 'Integrating Multi-omics Data via Latent Space Construction for Breast and Bladder Cancer Analysis',
      description: 'Developed a deep learning pipeline integrating gene expression, DNA methylation, and copy number alteration data via Deep Multiset CCA and Graph Attention Networks to create a shared latent space, which improved cancer subtype prediction and biomarker identification for breast and bladder cancer.',
      tech: ['GAT', 'DMCCA', 'Python'],
      code: 'https://github.com/arvindcb-2023/cancer-analysis',
    },
    {
      title: 'QuickEval (Assignment Grader)',
      description: 'Web-based grading platform using Flask, Bootstrap5, and Firebase, featuring instructor and student dashboards. Integrated NLP models (BERT embeddings + cosine similarity) to automatically evaluate submitted PDFs based on keyword relevance, semantic similarity, plagiarism, and submission punctuality. Enabled scalable, transparent, and objective grading for educational use cases.',
      tech: ['BERT', 'Flask', 'NLP'],
      code: 'https://github.com/arvindcb-2023/assignment-grader',
    },
    {
      title: 'YouTube Trending Video Analysis using Apache Spark',
      description: 'A big data analytics project using Apache Spark to analyze YouTube trending video data, demonstrating proficiency in distributed computing and data processing.',
      tech: ['Apache Spark', 'Hadoop', 'Python'],
      code: 'https://github.com/arvindcb-2023/bigdata'
    },
    {
      title: 'Railway Track Fault Detection',
      description: 'AI-powered system for railway track fault detection using high-resolution image analysis and Convolutional Neural Networks (CNNs), significantly improving infrastructure safety and maintenance efficiency.',
      tech: ['AI', 'ML', 'Python'],
      code: 'https://github.com/arvindcb-2023/railway-track-fault-detection'
    },
    {
      title: 'Multilingual Telehealth Diagnosis for Underserved Areas',
      description: 'A multilingual telehealth chatbot that accurately diagnoses diseases (97% accuracy) and suggests medical actions by processing user symptoms in five Indian languages, powered by an ensemble of 10 machine learning classifiers.',
      tech: ['Flask', 'Python', 'ML'],
      code: '#'
    },
  ];

  return (
    <section
        id="projects"
        className="w-100 text-white"
        style={{ backgroundColor: '#121212', padding: '4rem 1rem', minHeight: '100vh' }}
    >

      <div className="container" style={{ maxWidth: '1260px' }}>
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
                    <p className="card-text small">
                      {project.description}
                    </p>
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
                  <div className="mt-3">
                    <div className="d-flex flex-wrap gap-2 mb-2">
                      {project.tech.map((tech, i) => (
                        <span key={i} className="badge bg-secondary">{tech}</span>
                      ))}
                    </div>
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
