import { Injectable } from '@angular/core';
import { State, StateToken } from '@ngxs/store';
import { IdeaTag } from '@ccal-apps/core';
import { mockIdeaTags } from './idea-tags.data';

export const IDEA_TAGS_STATE_TOKEN = new StateToken<IdeaTag[]>('ideaTags');

@State<IdeaTag[]>({
  name: IDEA_TAGS_STATE_TOKEN,
  defaults: mockIdeaTags,
})
@Injectable()
export class IdeaTagsState {}
