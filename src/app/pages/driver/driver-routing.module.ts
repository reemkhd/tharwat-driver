import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router'; 
import { DriverPage } from './driver.page';
import { HistoryComponent } from './history/history.component';
import { NewComponent } from './new/new.component';
import { OrdersComponent } from './orders/orders.component';

const routes: Routes = [
  {
    path: '',
    component: DriverPage
  },
  {
    path: 'orders',
    component: OrdersComponent,
    children: [
      {
        path: '',
        redirectTo: "new"
      },
      {
        path: 'new',
        component: NewComponent
      },
      {  
        path: 'history',
        component: HistoryComponent
      },
    ]
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
export class DriverPageRoutingModule {}
