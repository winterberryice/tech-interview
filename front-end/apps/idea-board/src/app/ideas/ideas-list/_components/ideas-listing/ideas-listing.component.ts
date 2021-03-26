import { Component, Input } from '@angular/core';
import { Idea, IdeaTag } from '@ccal-apps/core';

@Component({
  selector: 'ccal-ideas-listing',
  templateUrl: './ideas-listing.component.html',
  styleUrls: ['./ideas-listing.component.scss'],
})
export class IdeasListingComponent {
  @Input()
  ideas: Idea[] = [];

  @Input()
  ideaTags: IdeaTag[] = [];

  getTagById(tagId: string): IdeaTag {
    return this.ideaTags.find((tag) => tag.id === tagId);
  }
}
