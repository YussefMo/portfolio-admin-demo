import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Skeleton } from '@/components/ui/skeleton';
import { useGetContributions, useGetRepos } from '@/hooks/GitHubHooks';
import { Ban, ChartNoAxesCombined, FolderGit2, Github } from 'lucide-react';

const projects = [
  {
    id: 1,
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
          'Supabase',
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

function Cards() {
  const { loadingRepos, repos } = useGetRepos();
  const { loadingContributions, contributions } = useGetContributions();

  if (loadingRepos || loadingContributions) {
    return (
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {[...Array(4)].map((_, i) => (
          <Skeleton key={i} className="h-[200px] w-full rounded-xl" />
        ))}
      </div>
    );
  }

  const projectExtrasCount = projects.reduce(
    (count, project) => count + (project.extraSections?.length ?? 0),
    0
  );

  const totalRepos = repos.length;
  const totalProjects = projects.length + projectExtrasCount;
  const notUploadedRepos = totalRepos - totalProjects;

  const stats = [
    {
      title: 'Total Used Projects',
      value: totalProjects,
      icon: <FolderGit2 color="oklch(0.606 0.25 292.717)" />
    },
    {
      title: 'GitHub Repos',
      value: totalRepos,
      icon: <Github color="oklch(0.606 0.25 292.717)" />
    },
    {
      title: 'Not Used Projects',
      value: notUploadedRepos,
      icon: <Ban color="oklch(0.606 0.25 292.717)" />
    },
    {
      title: 'Contributions (all time)',
      value: contributions,
      icon: <ChartNoAxesCombined color="oklch(0.606 0.25 292.717)" />
    }
  ];

  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
      {stats.map((stat) => (
        <Card
          key={stat.title}
          className="border-primary bg-accent border-l-8 shadow-md"
        >
          <CardHeader className="flex gap-2">
            <Icon>{stat.icon}</Icon>
            <CardTitle className="text-lg">{stat.title}</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-4xl font-bold">{stat.value}</p>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}

function Icon({ children }: { children: React.ReactNode }) {
  return <span>{children}</span>;
}

export default Cards;
