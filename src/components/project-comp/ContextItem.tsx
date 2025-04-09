import { Eye, Github, Pencil, Trash } from 'lucide-react';
import { ContextMenuItem } from '../ui/context-menu';
import { useNavigate } from 'react-router-dom';

function ContextItem({
  demoLink,
  repoLink,
  id
}: {
  demoLink: string;
  repoLink: string;
  id: number;
}) {
  const navigate = useNavigate();

  return (
    <>
      <ContextMenuItem onClick={() => window.open(demoLink, '_blank')}>
        <Eye /> View Live Demo
      </ContextMenuItem>
      <ContextMenuItem onClick={() => window.open(repoLink, '_blank')}>
        <Github /> View Repo
      </ContextMenuItem>
      <ContextMenuItem onClick={() => navigate(`/projects/edit/${id}`)}>
        <Pencil /> Edit
      </ContextMenuItem>
      <ContextMenuItem onClick={() => alert('Delete action')}>
        <Trash /> Delete
      </ContextMenuItem>
    </>
  );
}

export default ContextItem;
