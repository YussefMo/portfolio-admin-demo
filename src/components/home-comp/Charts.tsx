import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  ResponsiveContainer,
  Legend
} from 'recharts';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { useGetRepos } from '@/hooks/GitHubHooks';
import Spinner from '../ui/Spinner';

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

type repo = {
  id: number;
  html_url: string;
  name: string;
};

function Charts() {
  const { loadingRepos, repos }: { loadingRepos: boolean; repos: repo[] } =
    useGetRepos();

  if (loadingRepos) return <Spinner />;

  const usedRepoNames = projects.flatMap((project) => [
    project.gitHubRepoName,
    ...(project.extraSections?.map((extra) => extra.gitHubRepoName) || [])
  ]);

  const unusedRepos = repos.filter(
    (repo: repo) => !usedRepoNames.includes(repo.name)
  );

  const projectExtrasCount = projects.reduce(
    (count, project) => count + (project.extraSections?.length ?? 0),
    0
  );

  const totalProjects = projects.length + projectExtrasCount;

  const totalRepos = repos.length;

  const data = [
    { name: 'Used in Portfolio', value: totalProjects },
    { name: 'Unused Repos', value: totalRepos - totalProjects }
  ];

  const COLORS = ['var(--chart-1)', 'var(--chart-2)'];

  return (
    <Card className="bg-card text-card-foreground mt-5 grid grid-cols-1 gap-6 sm:grid-cols-1 lg:grid-cols-2">
      <CardContent>
        <Card className="bg-accent">
          <CardHeader>
            <CardTitle className="text-lg">GitHub Repo Usage</CardTitle>
          </CardHeader>
          <CardContent>
            {/* Left: Chart */}
            <div className="h-[300px]">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={data}
                    cx="50%"
                    cy="50%"
                    innerRadius={60}
                    outerRadius={90}
                    fill="currentColor"
                    paddingAngle={5}
                    dataKey="value"
                    label
                  >
                    {data.map((_, index) => (
                      <Cell
                        key={`cell-${index}`}
                        fill={COLORS[index % COLORS.length]}
                      />
                    ))}
                  </Pie>
                  <Tooltip />
                  <Legend />
                </PieChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>
      </CardContent>
      <CardContent>
        {/* Right: Scrollable Repos List */}
        <Card className="bg-accent max-h-[400px] space-y-4 overflow-y-auto pr-2">
          <CardHeader>
            <CardTitle>Not Used Repos</CardTitle>
          </CardHeader>
          <CardContent>
            {unusedRepos.map((repo: repo) => (
              <div
                key={repo.id}
                className="border-border bg-card hover:bg-muted mb-2 flex items-center justify-between rounded-lg border p-3 transition"
              >
                <span>{repo.name}</span>
                <a
                  href={repo.html_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary font-medium hover:underline"
                >
                  Go To Repo
                </a>
              </div>
            ))}
          </CardContent>
        </Card>
      </CardContent>
    </Card>
  );
}

export default Charts;
