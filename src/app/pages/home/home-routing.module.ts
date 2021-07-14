import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomePage } from './home.page';
import {NewComponent} from '../home/new/new.component'
import {RequestPage} from '../home/request/request.page'
import { OrdersComponent } from './orders/orders.component';

const routes: Routes = [
  {
    path: '',
    component: HomePage
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
    component:NewComponent,
     }
  ],
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
export class HomePageRoutingModule {}
