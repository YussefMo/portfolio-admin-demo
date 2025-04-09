declare module '@/data/projects.js' {
  export interface ExtraSection {
    gitHubRepoName: string;
    title: string;
    description: string;
    tags: string[];
    image: string;
    liveDemo: string;
    repo: string;
  }

  export interface Project {
    id: number;
    category: 'vanilla' | 'react' | 'next' | 'full-system';
    gitHubRepoName: string;
    title: string;
    description: string;
    tags: string[];
    image: string;
    liveDemo: string;
    repo: string;
    extraSections?: ExtraSection[];
  }

  export const projects: Project[];
}
