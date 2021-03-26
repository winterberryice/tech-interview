import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IdeasEditPage } from './ideas-edit/ideas-edit.page';
import { IdeasListPage } from './ideas-list/ideas-list.page';
import { IdeasPage } from './ideas.page';

export const routes: Routes = [
  {
    path: '',
    component: IdeasPage,
    children: [
      {
        path: '',
        component: IdeasListPage,
      },
      {
        path: 'new',
        component: IdeasEditPage,
      },
      {
        path: ':ideaId',
        component: IdeasEditPage,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class IdeasRoutingModule {}
