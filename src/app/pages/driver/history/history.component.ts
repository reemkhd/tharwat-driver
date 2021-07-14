import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { OrderDetailsComponent } from '../order-details/order-details.component';
import { NavController } from '@ionic/angular';
import{ HttpServiceService} from '../../../services/http-service.service';
import { Driver } from 'src/app/models/driversModel';
import { Connect_info } from 'src/app/models/connectinfo';
import { AuthService } from 'src/app/services/auth.service';
import { EnvService } from 'src/app/services/env.service';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.scss'],
})
export class HistoryComponent implements OnInit {

  order_info:Driver[];
  connect_info:Connect_info[];

  constructor(
    public modalController: ModalController,
    private navCtrl: NavController,
    private httpService :HttpServiceService,
    private authService: AuthService,
    private env: EnvService,
    ) { }

  ngOnInit() {}

  async presentModal() {
    const modal = await this.modalController.create({
      component: OrderDetailsComponent,
      cssClass: 'my-custom-class'
    });
    return await modal.present();
  }

  ionViewWillEnter() {
    this.httpService.makeGet('auth/api_receive_orders_accept').subscribe(
      // user => {
      //   this.user = user;
      // },
      order_info => {
        this.order_info = order_info;
        console.log(order_info);
      }
    )

    this.httpService.makeGet('auth/receive_infoconnect').subscribe(
      // user => {
      //   this.user = user;
      // },
      connect_info => {
        this.connect_info = connect_info;
        console.log(connect_info);
      }
    )
  }
}