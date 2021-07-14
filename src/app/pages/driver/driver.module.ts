import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { DriverPageRoutingModule } from './driver-routing.module';
import { DriverPage } from './driver.page';
import { OrdersComponent } from './orders/orders.component';
import { OrderDetailsComponent } from './order-details/order-details.component';
import { NewComponent } from './new/new.component';
import { HistoryComponent } from './history/history.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DriverPageRoutingModule
  ],
  declarations: [DriverPage, OrdersComponent, OrderDetailsComponent, NewComponent, HistoryComponent]
})
export class DriverPageModule {}
