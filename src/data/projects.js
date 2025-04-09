export const projects = [
  {
    id: 1,
    category: 'full-system',
    gitHubRepoName: 'the-wild-oasis-website',
    title: 'The Wild Oasis',
    description:
      'Responsive full-stack booking app with admin dashboard, authentication, and dynamic routing. Built with Next.js App Router, Supabase, and Tailwind CSS.',
    tags: ['Next.js', 'Supabase', 'Tailwind CSS', 'React'],
    image: '/images/wild-oasis.jpg',
    liveDemo: 'https://the-wild-oasis-website-youssefmo.vercel.app/',
    repo: 'https://github.com/YussefMo/the-wild-oasis-website',
    extraSections: [
      {
        gitHubRepoName: 'wild-oasis-dashboard',
        title: 'Admin Dashboard',
        description:
          'Manage cabins, bookings, users, and settings with full authentication and authorization.',
        tags: [
          'styled component',
          'React Query',
          'React Router Dom',
          'Supabase',
          'React'
        ],
        image: '/images/wild-oasis-admin.jpg',
        liveDemo: 'https://wild-oasis-dashboard-youssef.vercel.app/',
        repo: 'https://github.com/YussefMo/wild-oasis-dashboard'
      }
    ]
  },
  {
    id: 2,
    category: 'react',
    gitHubRepoName: 'fast-pizza-co-react',
    title: 'Fast Pizza Co',
    description:
      'A responsive, single-page pizza ordering app built with React, Redux, and React Router. Users can browse the menu, customize their orders, and track their order status—all in real time.',
    tags: ['React', 'Redux Toolkit', 'React Router', 'Tailwind CSS'],
    image: '/images/fast-pizza-co.jpg',
    liveDemo: 'https://yussefmo.github.io/fast-pizza-co-react/',
    repo: 'https://github.com/YussefMo/fast-pizza-co-react'
  },
  {
    id: 3,
    category: 'react',
    gitHubRepoName: 'world-wise-react',
    title: 'WorldWise Travel Tracker',
    description:
      "A SPA Web map-based travel journal app built with React and Leaflet. Users can mark cities they've visited and keep notes about each trip",
    tags: ['React', 'Leaflet', 'Context API', 'React Router Dom'],
    image: '/images/world-wise.jpg',
    liveDemo: 'https://yussefmo.github.io/world-wise-react/',
    repo: 'https://github.com/YussefMo/world-wise-react'
  }
];