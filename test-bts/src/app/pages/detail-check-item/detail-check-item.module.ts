import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DetailCheckItemPageRoutingModule } from './detail-check-item-routing.module';

import { DetailCheckItemPage } from './detail-check-item.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DetailCheckItemPageRoutingModule
  ],
  declarations: [DetailCheckItemPage]
})
export class DetailCheckItemPageModule {}
