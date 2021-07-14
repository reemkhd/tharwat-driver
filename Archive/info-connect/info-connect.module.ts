import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InfoConnectPageRoutingModule } from './info-connect-routing.module';

import { InfoConnectPage } from './info-connect.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InfoConnectPageRoutingModule
  ],
  declarations: [InfoConnectPage]
})
export class InfoConnectPageModule {}
