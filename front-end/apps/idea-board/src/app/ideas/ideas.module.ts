import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IdeasRoutingModule } from './ideas-routing.module';
import { IdeasListPage } from './ideas-list/ideas-list.page';
import { IdeasEditPage } from './ideas-edit/ideas-edit.page';
import { IdeasPage } from './ideas.page';
import { RouterModule } from '@angular/router';
import { IdeasListingComponent } from './ideas-list/_components/ideas-listing/ideas-listing.component';
import { NgxsModule } from '@ngxs/store';
import { IdeasState } from './_stores/ideas.state';
import { IdeaTagsState } from './_stores/idea-tags.state';
import { IdeasEditorComponent } from './ideas-edit/_components/ideas-editor/ideas-editor.component';
import { IdeaTagComponent } from './_components/idea-tag/idea-tag.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    IdeasListPage,
    IdeasEditPage,
    IdeasPage,
    IdeasListingComponent,
    IdeasEditorComponent,
    IdeaTagComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule,
    IdeasRoutingModule,
    NgxsModule.forFeature([IdeasState, IdeaTagsState]),
  ],
})
export class IdeasModule {}
