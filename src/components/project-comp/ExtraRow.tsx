import { Badge } from '../ui/badge';
import { TableCell } from '../ui/table';

type sectionType = {
  gitHubRepoName: string;
  title: string;
  description: string;
  tags: string[];
  image: string;
  liveDemo: string;
  repo: string;
};

function ExtraRow({ section }: { section: sectionType }) {
  return (
    <>
      <TableCell>
        <img
          src={section.image}
          alt={section.title}
          className="h-12 w-18 rounded-md object-cover"
        />
      </TableCell>
      <TableCell className="text-sm font-medium sm:text-base">
        {section.title}
      </TableCell>
      <TableCell>
        <div className="flex flex-wrap gap-1">
          {section.tags.map((tag) => (
            <Badge key={tag} variant="secondary" className="text-xs sm:text-sm">
              {tag}
            </Badge>
          ))}
        </div>
      </TableCell>
    </>
  );
}

export default ExtraRow;
