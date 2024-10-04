import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NewChecklistItemPageRoutingModule } from './new-checklist-item-routing.module';

import { NewChecklistItemPage } from './new-checklist-item.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NewChecklistItemPageRoutingModule
  ],
  declarations: [NewChecklistItemPage]
})
export class NewChecklistItemPageModule {}
