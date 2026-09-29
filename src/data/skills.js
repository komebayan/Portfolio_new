export const skillCategories = [
  {
    id: 'frontend',
    title: 'Frontend',
    description: 'Crafting responsive, fluid, and intuitive user interfaces.',
    skills: [
      { name: 'React', level: 'Core', highlight: true, note: 'Components, hooks, state architecture' },
      { name: 'JavaScript', level: 'Core', highlight: true, note: 'Modern ES6+, async programming, DOM' },
      { name: 'HTML', level: 'Foundational', highlight: false, note: 'Semantic markup, accessibility, SEO' },
      { name: 'CSS', level: 'Foundational', highlight: false, note: 'Flexbox, Grid, animations, responsive' },
    ],
  },
  {
    id: 'backend',
    title: 'Backend',
    description: 'Building secure server logic, data schemas, and API pipelines.',
    skills: [
      { name: 'Python', level: 'Core', highlight: true, note: 'Object-oriented programming, scripting' },
      { name: 'Django', level: 'Core', highlight: true, note: 'MVC architecture, ORM, authentication' },
      { name: 'Django REST Framework', level: 'Intermediate', highlight: true, note: 'Serializers, viewsets, token auth' },
      { name: 'REST APIs', level: 'Intermediate', highlight: false, note: 'Endpoint design, JSON contracts, CRUD' },
    ],
  },
  {
    id: 'ai-ml',
    title: 'AI / ML',
    description: 'Exploring machine intelligence, embeddings, and generative models.',
    skills: [
      { name: 'Python', level: 'Core', highlight: true, note: 'Data structures, NumPy basics, algorithms' },
      { name: 'PyTorch', level: 'Exploring', highlight: true, note: 'Tensors, neural networks, gradients' },
      { name: 'Machine Learning', level: 'Exploring', highlight: true, note: 'Supervised learning concepts, evaluation' },
      { name: 'AI APIs', level: 'Active', highlight: true, note: 'LLM prompts, streaming completions, tooling' },
    ],
  },
  {
    id: 'tools',
    title: 'Tools & Workflow',
    description: 'Version control, developer environments, and local storage.',
    skills: [
      { name: 'Git', level: 'Daily', highlight: true, note: 'Branching, committing, merge resolution' },
      { name: 'GitHub', level: 'Daily', highlight: true, note: 'Repositories, issues, code hosting' },
      { name: 'VS Code', level: 'Daily', highlight: false, note: 'Extensions, debugging, fast navigation' },
      { name: 'SQLite', level: 'Intermediate', highlight: false, note: 'Relational querying, schema migrations' },
    ],
  },
]
