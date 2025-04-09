import { Badge } from '../ui/badge';
import { TableCell } from '../ui/table';

type projectType = {
  id: number;
  gitHubRepoName: string;
  title: string;
  description: string;
  tags: string[];
  image: string;
  liveDemo: string;
  repo: string;
  extraSections?: {
    gitHubRepoName: string;
    title: string;
    description: string;
    tags: string[];
    image: string;
    liveDemo: string;
    repo: string;
  }[];
};

function ProjectRow({
  project: { image, title, tags }
}: {
  project: projectType;
}) {
  return (
    <>
      <TableCell>
        <img
          src={image}
          alt={title}
          className="h-12 w-18 rounded-md object-cover"
        />
      </TableCell>
      <TableCell className="text-sm font-medium sm:text-base">
        {title}
      </TableCell>
      <TableCell>
        <div className="flex flex-wrap gap-1">
          {tags.map((tag) => (
            <Badge key={tag} variant="secondary" className="text-xs sm:text-sm">
              {tag}
            </Badge>
          ))}
        </div>
      </TableCell>
    </>
  );
}

export default ProjectRow;
