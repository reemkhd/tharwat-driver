import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InfoConnectPage } from './info-connect.page';

const routes: Routes = [
  {
    path: '',
    component: InfoConnectPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InfoConnectPageRoutingModule {}
