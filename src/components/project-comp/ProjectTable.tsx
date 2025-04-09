import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import {
  ContextMenu,
  ContextMenuContent,
  ContextMenuTrigger
} from '@/components/ui/context-menu';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow
} from '@/components/ui/table';
import React from 'react';
import ContextItem from './ContextItem';
import ExtraRow from './ExtraRow';
import ProjectRow from './ProjectRow';
import { useNavigate } from 'react-router-dom';

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

function ProjectTable() {
  const navigate = useNavigate()

  return (
    <>
      <Card className="mt-5">
        <CardContent className="overflow-x-auto p-2 sm:p-4">
          <div className="min-w-[600px] lg:min-w-full">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="w-[100px] text-sm sm:text-base">
                    Image
                  </TableHead>
                  <TableHead className="text-sm sm:text-base">Title</TableHead>
                  <TableHead className="text-sm sm:text-base">Tags</TableHead>
                  <TableHead className="text-center text-sm sm:text-base">
                    Action
                  </TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {projects.map((project) => (
                  <React.Fragment key={project.id}>
                    <TableRow>
                      <ProjectRow key={project.id} project={project} />
                      <TableCell className="text-muted-foreground text-right text-sm sm:text-base">
                        <ContextMenu>
                          <ContextMenuTrigger asChild>
                            <Button variant="ghost" size="sm">
                              Right Click Me
                            </Button>
                          </ContextMenuTrigger>
                          <ContextMenuContent>
                            <ContextItem
                              key={project.id}
                              demoLink={project.liveDemo}
                              repoLink={project.repo}
                              id={project.id}
                            />
                          </ContextMenuContent>
                        </ContextMenu>
                      </TableCell>
                    </TableRow>

                    {/* Render extra sections */}
                    {project.extraSections?.map((section) => (
                      <TableRow key={section.gitHubRepoName}>
                        <ExtraRow
                          key={section.gitHubRepoName}
                          section={section}
                        />
                        <TableCell className="text-muted-foreground text-right text-sm sm:text-base">
                          <ContextMenu>
                            <ContextMenuTrigger asChild>
                              <Button variant="ghost" size="sm">
                                Right Click Me
                              </Button>
                            </ContextMenuTrigger>
                            <ContextMenuContent>
                              <ContextItem
                                key={project.id}
                                demoLink={section.liveDemo}
                                repoLink={section.repo}
                                id={project.id}
                              />
                            </ContextMenuContent>
                          </ContextMenu>
                        </TableCell>
                      </TableRow>
                    ))}
                  </React.Fragment>
                ))}
              </TableBody>
            </Table>
          </div>
        </CardContent>
      </Card>
      <Button className='mt-5' onClick={()=>navigate('/projects/new')}>Add New Project</Button>
    </>
  );
}

export default ProjectTable;
