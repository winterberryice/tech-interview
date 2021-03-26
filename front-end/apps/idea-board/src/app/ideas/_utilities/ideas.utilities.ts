import { Idea } from '@ccal-apps/core';

export function sortIdeasByName(ideas: Idea[]): Idea[] {
  /* ToDo: Return ideas sorted by name ascending */
  return ideas;
}

export function getIdeaById(ideas: Idea[], ideaId: string): Idea {
  /* ToDo: Return idea by given ID */
  return ideas[0];
}

export function filterIdeasByTagIds(ideas: Idea[], tagIds: string[]): Idea[] {
  /* ToDo: Return ideas where idea.tagIds contains at least one of passed tagIds */
  return ideas;
}
