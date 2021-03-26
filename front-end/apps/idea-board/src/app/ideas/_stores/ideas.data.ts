import { Idea } from '@ccal-apps/core';

export const mockIdeas: Idea[] = [
  {
    id: 'idea-1',
    name: 'Dark mode',
    description: `Let's add dark mode to our application.`,
    tagIds: ['tag-2'],
  },
  {
    id: 'idea-2',
    name: 'Sorting',
    description:
      'It would be really awesome to have the ability to sort our ideas by name.',
    tagIds: ['tag-2', 'tag-3'],
  },
  {
    id: 'idea-3',
    name: 'Filtering',
    description: 'Maybe we could add filtering by tags.',
    tagIds: ['tag-3'],
  },
  {
    id: 'idea-4',
    name: 'Coffee break',
    description: 'Coffee break increases developers performance',
    tagIds: ['tag-1'],
  },
  {
    id: 'idea-5',
    name: 'Emoji picker',
    description: 'Add emoji picker for idea title and description',
    tagIds: [],
  },
  {
    id: 'idea-6',
    name: 'More themes',
    description:
      'Why only dark mode? We can build much more themes to fit every branding needs',
    tagIds: ['tag-1', 'tag-2', 'tag-3'],
  },
  {
    id: 'idea-7',
    name: 'Free fridays',
    description: '... because why not?',
    tagIds: ['tag-3'],
  },
  {
    id: 'idea-8',
    name: 'Mobile App',
    description: `Let's build a mobile app`,
    tagIds: ['tag-3'],
  },
];
