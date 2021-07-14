import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InfoConnectPageRoutingModule } from './info-connect-routing.module';

import { InfoConnectPage } from './info-connect.page';

import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InfoConnectPageRoutingModule,

    ReactiveFormsModule,
  ],
  declarations: [InfoConnectPage]
})
export class InfoConnectPageModule {}
