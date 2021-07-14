import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdminPage } from './admin.page';
import { AdminOrdersComponent } from './admin-orders/admin-orders.component';
import { DeliveredComponent } from './delivered/delivered.component';

const routes: Routes = [
  {
    path: '',
    component: AdminPage
  },
  {
    path: 'request',
    component: AdminOrdersComponent
  },
  {
    path: 'delivered',
    component: DeliveredComponent
  },
  {
    path: "**",
    redirectTo: "/"
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminPageRoutingModule {}
