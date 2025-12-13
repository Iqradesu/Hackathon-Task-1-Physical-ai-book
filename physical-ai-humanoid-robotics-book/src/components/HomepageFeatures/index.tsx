import React from 'react';
import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';
import Link from '@docusaurus/Link';

type FeatureItem = {
  title: string;
  description: React.ReactNode;
  to: string;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Module 1: The Robotic Nervous System (ROS 2)',
    description: (
      <>
        Explore the foundational architecture of modern robotics with the Robot Operating System 2.
      </>
    ),
    to: '/docs/ros-2-fundamentals/2.0_architecture',
  },
  {
    title: 'Module 3: The AI-Robot Brain (NVIDIA Isaac)',
    description: (
      <>
        Dive into the powerful simulation and AI capabilities of NVIDIA's platform for robotics.
      </>
    ),
    to: '/docs/isaac-ai-brain/4.0_edge-ai-introduction',
  },
  {
    title: 'Module 4: Vision-Language-Action (VLA)',
    description: (
      <>
        Learn how to build robots that can understand and interact with the world through natural language and vision.
      </>
    ),
    to: '/docs/vision-language-action/5.0_vla-paradigm',
  },
];

function Feature({title, description, to}: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <Link to={to} className={styles.featureLink}>
        <div className="text--center padding-horiz--md">
          <Heading as="h3">{title}</Heading>
          <p>{description}</p>
        </div>
      </Link>
    </div>
  );
}

export default function HomepageFeatures(): JSX.Element {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
