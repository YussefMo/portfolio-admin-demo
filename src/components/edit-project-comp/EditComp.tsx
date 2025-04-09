import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from '@/components/ui/select';
import { Separator } from '@/components/ui/separator';
import { Textarea } from '@/components/ui/textarea';
import { projects } from '@/data/projects.js';
import { X } from 'lucide-react';
import { useEffect, useState } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { useNavigate, useParams } from 'react-router-dom';

export default function EditComp() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [projectData, setProjectData] = useState<any>(null);
  const [tags, setTags] = useState<string[]>([]);
  const [extraTags, setExtraTags] = useState<string[]>([]);
  const [showTagInput, setShowTagInput] = useState(false);
  const [newTag, setNewTag] = useState('');
  const [showExtraTagInput, setShowExtraTagInput] = useState(false);
  const [newExtraTag, setNewExtraTag] = useState('');

  const { register, handleSubmit, reset, control } = useForm();

  useEffect(() => {
    const project = projects.find((p) => p.id === Number(id));
    if (project) {
      setProjectData(project);
      setTags(project.tags || []);
      setExtraTags(project.extraSections?.[0]?.tags || []);
      reset(project);
    } else {
      navigate('/not-found');
    }
  }, [id, navigate, reset]);

  const onSubmit = (data: any) => {
    const finalData = {
      ...data,
      tags,
      extraSections: [
        {
          ...data.extraSections?.[0],
          tags: extraTags
        }
      ]
    };

    console.log('Updated Project', finalData);
    navigate('/projects');
  };

  function handleAddTag() {
    if (!newTag.trim()) return;
    setTags([...tags, newTag.trim()]);
    setNewTag('');
    setShowTagInput(false);
  }

  function handleAddExtraTag() {
    if (!newExtraTag.trim()) return;
    setExtraTags([...extraTags, newExtraTag.trim()]);
    setNewExtraTag('');
    setShowExtraTagInput(false);
  }

  function removeTag(tagToRemove: string) {
    setTags(tags.filter((tag) => tag !== tagToRemove));
  }

  function removeExtraTag(tagToRemove: string) {
    setExtraTags(extraTags.filter((tag) => tag !== tagToRemove));
  }

  if (!projectData)
    return <div className="mt-10 text-center">Loading project...</div>;

  return (
    <div className="mx-auto mt-10 max-w-3xl space-y-6 overflow-auto">
      <h2 className="text-2xl font-semibold">Edit Project</h2>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        <div className="space-y-2">
          <Label>Title</Label>
          <Input {...register('title')} />
        </div>

        <div className="space-y-2">
          <Label>Category</Label>
          <Controller
            name="category"
            control={control}
            render={({ field }) => (
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Select category" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="vanilla">Vanilla</SelectItem>
                  <SelectItem value="react">React</SelectItem>
                  <SelectItem value="next">Next</SelectItem>
                  <SelectItem value="full-system">Full System</SelectItem>
                </SelectContent>
              </Select>
            )}
          />
        </div>

        <div className="space-y-2">
          <Label>Description</Label>
          <Textarea {...register('description')} />
        </div>

        <div className="space-y-2">
          <Label>GitHub Repo Name</Label>
          <Input {...register('gitHubRepoName')} />
        </div>

        <div className="space-y-2">
          <Label>Live Demo</Label>
          <Input {...register('liveDemo')} />
        </div>

        <div className="space-y-2">
          <Label>Repo</Label>
          <Input {...register('repo')} />
        </div>

        <div className="space-y-2">
          <Label>Image</Label>
          <Input {...register('image')} />
        </div>

        <div className="space-y-2">
          <Label>Tags</Label>
          <div className="flex flex-wrap gap-2">
            {tags.map((tag, idx) => (
              <span
                key={idx}
                className="flex items-center gap-1 rounded-full bg-gray-700 px-3 py-1 text-sm text-white"
              >
                {tag}
                <X
                  className="h-4 w-4 cursor-pointer"
                  onClick={() => removeTag(tag)}
                />
              </span>
            ))}
            {showTagInput ? (
              <Input
                value={newTag}
                onChange={(e) => setNewTag(e.target.value)}
                onBlur={handleAddTag}
                autoFocus
                className="w-auto"
              />
            ) : (
              <Button
                type="button"
                onClick={() => setShowTagInput(true)}
                variant="outline"
              >
                + Add Tag
              </Button>
            )}
          </div>
        </div>

        <Separator />
        <h3 className="text-lg font-semibold">Extra Section (Optional)</h3>

        <div className="space-y-2">
          <Label>Title</Label>
          <Input {...register('extraSections.0.title')} />
        </div>

        <div className="space-y-2">
          <Label>Description</Label>
          <Textarea {...register('extraSections.0.description')} />
        </div>

        <div className="space-y-2">
          <Label>GitHub Repo Name</Label>
          <Input {...register('extraSections.0.gitHubRepoName')} />
        </div>

        <div className="space-y-2">
          <Label>Live Demo</Label>
          <Input {...register('extraSections.0.liveDemo')} />
        </div>

        <div className="space-y-2">
          <Label>Repo</Label>
          <Input {...register('extraSections.0.repo')} />
        </div>

        <div className="space-y-2">
          <Label>Image</Label>
          <Input {...register('extraSections.0.image')} />
        </div>

        <div className="space-y-2">
          <Label>Extra Tags</Label>
          <div className="flex flex-wrap gap-2">
            {extraTags.map((tag, idx) => (
              <span
                key={idx}
                className="flex items-center gap-1 rounded-full bg-gray-700 px-3 py-1 text-sm text-white"
              >
                {tag}
                <X
                  className="h-4 w-4 cursor-pointer"
                  onClick={() => removeExtraTag(tag)}
                />
              </span>
            ))}
            {showExtraTagInput ? (
              <Input
                value={newExtraTag}
                onChange={(e) => setNewExtraTag(e.target.value)}
                onBlur={handleAddExtraTag}
                autoFocus
                className="w-auto"
              />
            ) : (
              <Button
                type="button"
                onClick={() => setShowExtraTagInput(true)}
                variant="outline"
              >
                + Add Extra Tag
              </Button>
            )}
          </div>
        </div>

        <Button type="submit" className="mt-4">
          Save Changes
        </Button>
      </form>
    </div>
  );
}
