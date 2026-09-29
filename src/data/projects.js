export const projects = [
  {
    id: 'note-maker',
    title: 'Note Maker',
    subtitle: 'Django-Powered Knowledge Vault',
    description:
      'A Django-powered note-taking application with authentication, user-specific notes, search functionality, and a clean interface.',
    category: 'Full-Stack Application',
    featured: false,
    tech: ['Python', 'Django', 'JavaScript', 'SQLite'],
    gradient: 'from-blue-500/20 to-cyan-500/20',
    accentColor: '#38bdf8',
    github: 'https://github.com',
    liveDemo: 'https://example.com',
    features: [
      'User Authentication & Session Management',
      'Instant Search & Filter by Tag',
      'Markdown & Rich Text Storage',
      'SQLite Relational Schema',
    ],
    codeSnippet: `class Note(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    title = models.CharField(max_length=200)
    body = models.TextField()
    created_at = models.DateTimeField(auto_now_add=True)`,
  },
  {
    id: 'ai-assistant',
    title: 'AI Assistant',
    subtitle: 'Intelligent Conversational Workspace',
    description:
      'An experimental AI application exploring conversational interfaces, APIs, and intelligent features.',
    category: 'AI / Full-Stack',
    featured: true,
    tech: ['Python', 'AI', 'APIs', 'React'],
    gradient: 'from-violet-500/20 to-purple-500/20',
    accentColor: '#a855f7',
    github: 'https://github.com',
    liveDemo: 'https://example.com',
    features: [
      'Real-time streaming responses via APIs',
      'Context-aware conversational memory',
      'Custom prompt steering & model tuning',
      'Responsive dark-mode UI with React',
    ],
    codeSnippet: `async function generateResponse(prompt) {
  const stream = await aiClient.chat.completions.create({
    model: "gpt-4o-mini",
    messages: [{ role: "user", content: prompt }],
    stream: true,
  });
  return stream;
}`,
  },
  {
    id: 'digital-product-platform',
    title: 'Digital Product Platform',
    subtitle: 'Modern Product Showcase & Catalog',
    description:
      'An interactive web platform concept for creating and presenting digital products.',
    category: 'Frontend & APIs',
    featured: false,
    tech: ['React', 'JavaScript', 'APIs'],
    gradient: 'from-emerald-500/20 to-teal-500/20',
    accentColor: '#34d399',
    github: 'https://github.com',
    liveDemo: 'https://example.com',
    features: [
      'Dynamic product showcase grid',
      'Interactive filtering & search state',
      'Modular reusable React components',
      'Clean glassmorphic presentation cards',
    ],
    codeSnippet: `const [products, setProducts] = useState([])
useEffect(() => {
  fetchProducts().then(data => setProducts(data))
}, [])`,
  },
]
