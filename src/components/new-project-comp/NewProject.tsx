import { useForm, useFieldArray, Controller } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { Separator } from '@/components/ui/separator';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from '@/components/ui/select';

type ExtraSection = {
  gitHubRepoName: string;
  title: string;
  description: string;
  tags: string[];
  image: string;
  liveDemo: string;
  repo: string;
};

type FormValues = {
  category: string;
  gitHubRepoName: string;
  title: string;
  description: string;
  tags: string[];
  image: string;
  liveDemo: string;
  repo: string;
  extraSections: ExtraSection[];
};

export default function AddProjectPage() {
  const navigate = useNavigate();
  const { register, handleSubmit, setValue, watch, control } =
    useForm<FormValues>({
      defaultValues: {
        gitHubRepoName: '',
        title: '',
        category: '',
        description: '',
        tags: [],
        image: '',
        liveDemo: '',
        repo: '',
        extraSections: [
          {
            gitHubRepoName: '',
            title: '',
            description: '',
            tags: [],
            image: '',
            liveDemo: '',
            repo: ''
          }
        ]
      }
    });

  useFieldArray({
    control,
    name: 'extraSections'
  });

  const tags = watch('tags');
  const extraTags = watch('extraSections')[0]?.tags || [];

  const [newTag, setNewTag] = useState('');
  const [newExtraTag, setNewExtraTag] = useState('');

  const addTag = () => {
    if (newTag.trim() !== '') {
      setValue('tags', [...tags, newTag.trim()]);
      setNewTag('');
    }
  };

  const removeTag = (tagToRemove: string) => {
    setValue(
      'tags',
      tags.filter((tag) => tag !== tagToRemove)
    );
  };

  const addExtraTag = () => {
    if (newExtraTag.trim() !== '') {
      const updated = [...extraTags, newExtraTag.trim()];
      setValue(`extraSections.0.tags`, updated);
      setNewExtraTag('');
    }
  };

  const removeExtraTag = (tagToRemove: string) => {
    const updated = extraTags.filter((tag) => tag !== tagToRemove);
    setValue(`extraSections.0.tags`, updated);
  };

  const onSubmit = (data: FormValues) => {
    console.log('Final Project Data:', data);
    navigate('/projects');
  };

  return (
    <div className="mx-auto mt-10 max-w-3xl space-y-6">
      <h2 className="text-2xl font-semibold">Add New Project</h2>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        {/* Main Fields */}
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
          <Label>Image URL</Label>
          <Input {...register('image')} />
        </div>

        <div className="space-y-2">
          <Label>Tags</Label>
          <div className="flex flex-wrap gap-2">
            {tags.map((tag) => (
              <span
                key={tag}
                className="flex items-center gap-1 rounded-full bg-gray-700 px-3 py-1 text-sm text-white"
              >
                {tag}
                <button
                  type="button"
                  className="h-4 w-4 cursor-pointer"
                  onClick={() => removeTag(tag)}
                >
                  ×
                </button>
              </span>
            ))}
            <Input
              value={newTag}
              onChange={(e) => setNewTag(e.target.value)}
              onKeyDown={(e) =>
                e.key === 'Enter' && (e.preventDefault(), addTag())
              }
              className="w-auto"
              placeholder="Add tag..."
            />
            <Button type="button" onClick={addTag} variant="outline">
              Add
            </Button>
          </div>
        </div>

        {/* Extra Section */}
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
            {extraTags.map((tag) => (
              <span
                key={tag}
                className="flex items-center gap-1 rounded-full bg-gray-700 px-3 py-1 text-sm text-white"
              >
                {tag}
                <button
                  type="button"
                  className="h-4 w-4 cursor-pointer"
                  onClick={() => removeExtraTag(tag)}
                >
                  ×
                </button>
              </span>
            ))}
            <Input
              value={newExtraTag}
              onChange={(e) => setNewExtraTag(e.target.value)}
              onKeyDown={(e) =>
                e.key === 'Enter' && (e.preventDefault(), addExtraTag())
              }
              className="w-auto"
              placeholder="Add tag..."
            />
            <Button type="button" onClick={addExtraTag} variant="outline">
              Add
            </Button>
          </div>
        </div>

        <Button type="submit">Submit</Button>
      </form>
    </div>
  );
}
