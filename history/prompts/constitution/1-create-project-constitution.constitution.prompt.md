---
id: 1
title: Create Project Constitution
stage: constitution
date: 2025-12-11
surface: agent
model: Gemini
feature: none
branch: master
user: iqra ghaffar
command: /sp.constitution
labels: [constitution, setup]
links:
  spec: null
  ticket: null
  adr: null
  pr: null
files:
 - .specify/memory/constitution.md
 - .specify/templates/plan-template.md
tests:
 - none
---

## Prompt

/sp.constitution Create a structured,professional constitution for my project with these requirements

Project: Physical AI & Humanoid Robotics Textbook and Integrated RAG Chatbot

Core Principles:

Documentation-First Clarity: All content must achieve the clarity, completeness, and structured navigation of professional technical documentation (e.g., official ROS or NVIDIA Isaac docs), ensuring ease of understanding for students.

Spec-Anchored Development (SAD): The specifications are the single source of truth. All content and code generated must rigorously adhere to the detailed requirements of this Constitution and subsequent plan documents.

Technical Rigor & Depth: Explanations must be detailed, academically accurate, and provide sufficient material to teach the specified 13-week university-level course, covering both theoretical foundations and practical application.

Modularity for Maintainability: The project structure (Docusaurus modules, FastAPI backend) must be inherently modular to support versioning, updates, and future scaling.

Key Standards (Task 1: Docusaurus Textbook Content & Structure):

Course Structure: The textbook must be divided into five top-level Modules, matching the 13-week course outline:

Introduction to Physical AI (Weeks 1-2)

The Robotic Nervous System (ROS 2) (Weeks 3-5)

The Digital Twin (Gazebo & Unity) (Weeks 6-7)

The AI-Robot Brain (NVIDIA Isaac™) (Weeks 8-11)

Vision-Language-Action (VLA) (Weeks 12-13)

Chapter Depth: Each weekly section must be a standalone chapter, extensive in content, not short, and teach its concept clearly.

Chapter Template: Every chapter (Markdown/MDX file) must strictly follow this structure:

Objective: Clear learning goals.

Prerequisites/Setup: Required software, hardware, or prior knowledge.

Conceptual Explanation: Detailed, paragraph-form explanations.

Technical Deep Dive: Advanced concepts and architecture overviews.

Code Implementation: Code blocks with runnable, real-world examples.

Summary/Checkpoints.

Code Blocks: All necessary code blocks (e.g., Python, C++, Bash/YAML) must use correct syntax highlighting and be accompanied by line-by-line explanation blocks.

Visualization: Utilize conceptual diagrams (e.g., , ) immediately following the concept definition for clarity.

Docusaurus UI: The site must utilize the classic preset with a clean, responsive theme suitable for technical reading.

Key Standards (Task 2: RAG Chatbot Integration):

Technology Stack Mandate: Strict adherence to the required components for the RAG system:

RAG Orchestration/LLM Gateway: OpenAI Agents/ChatKit SDKs

Vector Database: Qdrant Cloud Free Tier

Relational/Metadata Database: Neon Serverless Postgres

API Service: FastAPI

Functional Requirement 1 (General Q&A): The chatbot must be able to retrieve and synthesize information from the entire published textbook content to answer user questions.

Functional Requirement 2 (Contextual Q&A): The chatbot must include a mechanism (e.g., an embedded button or listener) to accept user-selected text as the sole context for answering a specific follow-up question.

Integration: The chatbot must be a visually consistent, embeddable component on all Docusaurus pages, not a separate, full-page application.

Constraints:

Data Source: The RAG implementation can only use the generated Docusaurus textbook (MD/MDX files) as its knowledge base.

Success Criteria:

Content Completion: The textbook contains 13 detailed, high-quality chapters covering Weeks 1 through 13.

Build Success: The Docusaurus site builds and runs without errors.

RAG Implementation: The RAG Chatbot is successfully integrated, connects to Qdrant and Neon, and demonstrates successful retrieval and generation for both general and selected-text queries.

Code Quality: All generated code is clean, well-commented, and runnable according to the standard practices of the specified languages.

## Response snapshot

I have created the project constitution and updated the relevant template files.

## Outcome

- ✅ Impact: A new project constitution was created, defining the core principles and standards for the project. Dependent templates were updated for consistency.
- 🧪 Tests: none
- 📁 Files: .specify/memory/constitution.md, .specify/templates/plan-template.md
- 🔁 Next prompts: none
- 🧠 Reflection: The user provided a very detailed prompt, which made it easy to create a comprehensive constitution.

## Evaluation notes (flywheel)

- Failure modes observed: none
- Graders run and results (PASS/FAIL): PASS
- Prompt variant (if applicable): null
- Next experiment (smallest change to try): null
