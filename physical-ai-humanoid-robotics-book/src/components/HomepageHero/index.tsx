import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import styles from './styles.module.css';

const ModuleList = [
  {
    title: 'Module 1: The Robotic Nervous System (ROS 2)',
    description: 'Explore the foundational architecture of modern robotics with the Robot Operating System 2.',
    to: '/docs/ros-2-fundamentals/2.0_architecture',
  },
  {
    title: 'Module 2: The AI-Robot Brain (NVIDIA Isaac)',
    description: "Dive into the powerful simulation and AI capabilities of NVIDIA's platform for robotics.",
    to: '/docs/isaac-ai-brain/4.0_edge-ai-introduction',
  },
  {
    title: 'Module 3: Vision-Language-Action (VLA)',
    description: 'Learn how to build robots that can understand and interact with the world through natural language and vision.',
    to: '/docs/vision-language-action/5.0_vla-paradigm',
  },
];

function ModuleCard({title, description, to}) {
  return (
    <div className="col col--4">
      <Link to={to} className={styles.heroCardLink}>
        <div className={clsx('hero-card', styles.heroCard)}>
          <h3>{title}</h3>
          <p>{description}</p>
        </div>
      </Link>
    </div>
  );
}

export default function HomepageHero() {
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <h1 className="hero__title">Physical AI & Humanoid Robotics</h1>
        <p className="hero__subtitle">Bridging the gap between the digital brain and the physical body.</p>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/docs/introduction-to-physical-ai/1.0_ai-great-leap">
            Start Learning
          </Link>
        </div>
        <div className="row">
          {ModuleList.map((props, idx) => (
            <ModuleCard key={idx} {...props} />
          ))}
        </div>
      </div>
    </header>
  );
}
