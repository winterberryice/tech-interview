import { Component } from '@angular/core';
import { Idea, IdeaTag } from '@ccal-apps/core';
import { Select } from '@ngxs/store';
import { Observable } from 'rxjs';
import { IdeaTagsState } from '../_stores/idea-tags.state';
import { IdeasState } from '../_stores/ideas.state';

@Component({
  templateUrl: './ideas-list.page.html',
  styleUrls: ['./ideas-list.page.scss'],
})
export class IdeasListPage {
  @Select(IdeasState)
  ideas$: Observable<Idea[]>;

  @Select(IdeaTagsState)
  ideaTags$: Observable<IdeaTag[]>;
}
