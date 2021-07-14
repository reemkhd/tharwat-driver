import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import{ HttpServiceService} from '../../../services/http-service.service';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.scss'],
})
export class OrdersComponent implements OnInit {

  constructor(
    private navCtrl: NavController,
    private httpService :HttpServiceService
    ) { }

  ngOnInit() {}

  goBack(){
    this.navCtrl.navigateBack('/home');
  }

}
