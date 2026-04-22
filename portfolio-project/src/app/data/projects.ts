export type Project = {
  id: string
  title: string
  tagline: string
  description: string
  image: string
  tech: string[]
  link?: string
  github?: string
  featured?: boolean
  accent: 'violet' | 'cyan' | 'fuchsia' | 'rose' | 'lime'
  badge?: string
}

export const projects: Project[] = [
  {
    id: 'hedgelock',
    title: 'HedgeLock',
    tagline: 'Cross-platform sports betting simulator with competitive MMR ladder.',
    description:
      'React Native app integrating live sports APIs where users place simulated bets and climb an Elo-style ladder. Ships advanced betting tools — arbitrage finders, hedge calculators, and high-EV bet detectors with automated push notifications — backed by a SQL data layer for user profiles, wager history, and ranking.',
    image: '/projects/hedgelock.svg',
    tech: ['React Native', 'TypeScript', 'SQL', 'REST APIs', 'Claude Code'],
    featured: true,
    accent: 'violet',
    badge: 'In development · 2025',
  },
  {
    id: 'xrp-bot',
    title: 'XRP Sniping Bot',
    tagline: '$250k+ in revenue — one of the fastest bots on the XRP Ledger.',
    description:
      'Co-developed a crypto bot in JavaScript that automatically snipes and trades new XRP tokens. Generated over $250,000 of revenue across a 6-month span during the peak of the market — consistently one of the fastest bots on-chain. Also shipped a suite of manual sniping tools (trustline management, instant buys/sells) that outperformed mainstream tools on latency.',
    image: '/projects/xrp.svg',
    tech: ['JavaScript', 'Node.js', 'XRP Ledger', 'WebSockets'],
    accent: 'lime',
    featured: true,
    badge: '$250k+ revenue',
  },
  {
    id: 'mlb-whiff',
    title: 'MLB Whiff % Analysis',
    tagline: 'Python data analysis on MLB pitcher whiff percentages.',
    description:
      'Ongoing collaboration digging into MLB whiff-rate data to surface pitch-type trends and matchup edges. Python-driven analysis with statistical modeling and visualization.',
    image: '/projects/mlb.svg',
    tech: ['Python', 'Pandas', 'Data Analysis'],
    github: 'https://github.com/N-Rossi/Python-MLB-Whiff_Percentage',
    accent: 'cyan',
  },
  {
    id: 'greenscapes',
    title: 'Greenscapes Website',
    tagline: 'Business landing site for a local landscaping company.',
    description:
      'Static landing site built for a friend\'s landscaping business — clean responsive layout, fast load times, and clear contact pathways.',
    image: '/projects/greenscapes.svg',
    tech: ['HTML', 'CSS', 'JavaScript'],
    github: 'https://github.com/R-L-Labs/WebsiteService-Greenscapes',
    accent: 'lime',
  },
  {
    id: 'minecraft-modpack',
    title: 'ModWith50Perks',
    tagline: 'Custom Minecraft mod + modpack.',
    description:
      'Developed a custom Minecraft mod and curated modpack, handling Java mod development, configuration, and gameplay balancing.',
    image: '/projects/minecraft.svg',
    tech: ['Java', 'Forge', 'Gradle'],
    github: 'https://github.com/N-Rossi/ModWith50Perks',
    accent: 'fuchsia',
  },
  {
    id: 'runsignup',
    title: 'RunSignup Mobile Timer',
    tagline: 'Cross-platform race timing app built with RunSignup\'s production API.',
    description:
      'Capstone project: led a team building a React Native timing app for RunSignup races. Records times online or offline, uploads automatically on reconnect, and resolves racer conflicts — a specific ask from the company.',
    image: '/projects/runsignup.svg',
    tech: ['React Native', 'TypeScript', 'REST APIs'],
    accent: 'cyan',
  },
  {
    id: 'salty',
    title: 'Salty',
    tagline: 'Desktop app interpreting a gamer\'s emotion from voice volume.',
    description:
      'Team-built Electron app that records a user\'s voice during gaming sessions and scores emotional state on a 1–1000 scale based on volume tendencies. Includes per-game leaderboards, user stats, and a PostgreSQL-backed history.',
    image: '/projects/salty.svg',
    tech: ['Electron', 'React', 'PostgreSQL', 'Python', 'JavaScript'],
    accent: 'rose',
  },
  {
    id: 'portfolio',
    title: 'This Portfolio',
    tagline: 'Built from scratch with Next.js, Tailwind, and Framer Motion.',
    description:
      'The site you\'re on right now — custom animations, scroll-triggered reveals, a glass-morphism design system, and a moving project showcase. Designed, built, and deployed solo.',
    image: '/projects/portfolio.svg',
    tech: ['Next.js', 'TypeScript', 'Tailwind', 'Framer Motion'],
    github: 'https://github.com/N-Rossi',
    accent: 'violet',
  },
]
