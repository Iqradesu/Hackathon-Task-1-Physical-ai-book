<!--
Sync Impact Report:
- Version change: 0.0.0 -> 1.0.0
- Added sections:
  - Principle: Documentation-First Clarity
  - Principle: Spec-Anchored Development (SAD)
  - Principle: Technical Rigor & Depth
  - Principle: Modularity for Maintainability
  - Principle: Key Standards: Docusaurus Textbook Content & Structure
  - Principle: Key Standards: RAG Chatbot Integration
- Removed sections:
  - [PRINCIPLE_1_NAME]
  - [PRINCIPLE_2_NAME]
  - [PRINCIPLE_3_NAME]
  - [PRINCIPLE_4_NAME]
  - [PRINCIPLE_5_NAME]
  - [PRINCIPLE_6_NAME]
  - [SECTION_2_NAME]
  - [SECTION_3_NAME]
- Templates requiring updates:
  - ✅ .specify/templates/plan-template.md
  - ✅ .specify/templates/spec-template.md
  - ✅ .specify/templates/tasks-template.md
-->
# Physical AI & Humanoid Robotics Textbook and Integrated RAG Chatbot Constitution

## Core Principles

### I. Documentation-First Clarity
All content must achieve the clarity, completeness, and structured navigation of professional technical documentation (e.g., official ROS or NVIDIA Isaac docs), ensuring ease of understanding for students.

### II. Spec-Anchored Development (SAD)
The specifications are the single source of truth. All content and code generated must rigorously adhere to the detailed requirements of this Constitution and subsequent plan documents.

### III. Technical Rigor & Depth
Explanations must be detailed, academically accurate, and provide sufficient material to teach the specified 13-week university-level course, covering both theoretical foundations and practical application.

### IV. Modularity for Maintainability
The project structure (Docusaurus modules, FastAPI backend) must be inherently modular to support versioning, updates, and future scaling.

### V. Key Standards: Docusaurus Textbook Content & Structure
- **Course Structure**: The textbook must be divided into five top-level Modules, matching the 13-week course outline:
    - Introduction to Physical AI (Weeks 1-2)
    - The Robotic Nervous System (ROS 2) (Weeks 3-5)
    - The Digital Twin (Gazebo & Unity) (Weeks 6-7)
    - The AI-Robot Brain (NVIDIA Isaac™) (Weeks 8-11)
    - Vision-Language-Action (VLA) (Weeks 12-13)
- **Chapter Depth**: Each weekly section must be a standalone chapter, extensive in content, not short, and teach its concept clearly.
- **Chapter Template**: Every chapter (Markdown/MDX file) must strictly follow this structure:
    - Objective: Clear learning goals.
    - Prerequisites/Setup: Required software, hardware, or prior knowledge.
    - Conceptual Explanation: Detailed, paragraph-form explanations.
    - Technical Deep Dive: Advanced concepts and architecture overviews.
    - Code Implementation: Code blocks with runnable, real-world examples.
    - Summary/Checkpoints.
- **Code Blocks**: All necessary code blocks (e.g., Python, C++, Bash/YAML) must use correct syntax highlighting and be accompanied by line-by-line explanation blocks.
- **Visualization**: Utilize conceptual diagrams immediately following the concept definition for clarity.
- **Docusaurus UI**: The site must utilize the classic preset with a clean, responsive theme suitable for technical reading.

### VI. Key Standards: RAG Chatbot Integration
- **Technology Stack Mandate**: Strict adherence to the required components for the RAG system:
    - RAG Orchestration/LLM Gateway: OpenAI Agents/ChatKit SDKs
    - Vector Database: Qdrant Cloud Free Tier
    - Relational/Metadata Database: Neon Serverless Postgres
    - API Service: FastAPI
- **Functional Requirement 1 (General Q&A)**: The chatbot must be able to retrieve and synthesize information from the entire published textbook content to answer user questions.
- **Functional Requirement 2 (Contextual Q&A)**: The chatbot must include a mechanism (e.g., an embedded button or listener) to accept user-selected text as the sole context for answering a specific follow-up question.
- **Integration**: The chatbot must be a visually consistent, embeddable component on all Docusaurus pages, not a separate, full-page application.

## Governance

This Constitution is the supreme source of truth for the project. All development, content creation, and architectural decisions must align with its principles. Amendments to this constitution require a formal proposal, review, and approval process. All pull requests and reviews must verify compliance with these principles.

**Version**: 1.0.0 | **Ratified**: 2025-12-11 | **Last Amended**: 2025-12-11