import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

const sidebars: SidebarsConfig = {
  tutorialSidebar: [
    {
      type: 'category',
      label: 'Introduction to Physical AI',
      items: [
        'introduction-to-physical-ai/1.0_ai-great-leap',
        'introduction-to-physical-ai/1.1_definitions',
        'introduction-to-physical-ai/1.2_landscape',
        'introduction-to-physical-ai/1.3_sensor-systems',
        'introduction-to-physical-ai/1.4_physical-laws',
      ],
    },
    {
      type: 'category',
      label: 'ROS 2 Fundamentals',
      items: [
        'ros-2-fundamentals/2.0_architecture',
        'ros-2-fundamentals/2.1_topics-nodes',
        'ros-2-fundamentals/2.2_services-actions',
        'ros-2-fundamentals/2.3_packages-cli',
        'ros-2-fundamentals/2.4_urdf-launch',
      ],
    },
    {
      type: 'category',
      label: 'Digital Twin Simulation',
      items: [
        'digital-twin-simulation/3.0_simulation-philosophy',
        'digital-twin-simulation/3.1_gazebo-physics',
        'digital-twin-simulation/3.2_urdf-sdf',
        'digital-twin-simulation/3.3_sensor-simulation',
        'digital-twin-simulation/3.4_unity-visualization',
      ],
    },
    {
      type: 'category',
      label: 'The AI-Robot Brain (NVIDIA Isaac)',
      items: [
        'isaac-ai-brain/4.0_edge-ai-introduction',
        'isaac-ai-brain/4.1_isaac-sim-data',
        'isaac-ai-brain/4.2_isaac-ros-vslam',
        'isaac-ai-brain/4.3_nav2-humanoid',
        'isaac-ai-brain/4.4_sim-to-real-deployment',
      ],
    },
    {
      type: 'category',
      label: 'Vision-Language-Action (VLA)',
      items: [
        'vision-language-action/5.0_vla-paradigm',
        'vision-language-action/5.1_voice-to-action',
        'vision-language-action/5.2_cognitive-planning',
        'vision-language-action/5.3_capstone-integration',
        'vision-language-action/5.4_capstone-summary-future',
      ],
    },
  ],
};

export default sidebars;
