import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NewChecklistItemPage } from './new-checklist-item.page';

const routes: Routes = [
  {
    path: '',
    component: NewChecklistItemPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NewChecklistItemPageRoutingModule {}
