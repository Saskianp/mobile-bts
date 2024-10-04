import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DetailCheckItemPage } from './detail-check-item.page';

const routes: Routes = [
  {
    path: '',
    component: DetailCheckItemPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DetailCheckItemPageRoutingModule {}
