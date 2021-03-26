import { Component, Input } from '@angular/core';
import { IdeaTag } from '@ccal-apps/core';

@Component({
  selector: 'ccal-idea-tag',
  templateUrl: './idea-tag.component.html',
  styleUrls: ['./idea-tag.component.scss'],
})
export class IdeaTagComponent {
  @Input()
  ideaTag: IdeaTag;
}
