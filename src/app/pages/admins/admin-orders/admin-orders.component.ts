import { Component, OnInit } from '@angular/core';
import { RequestComponent } from '../request/request.component';
import { ActionSheetController, ModalController, NavController } from '@ionic/angular';

@Component({
  selector: 'app-admin-orders',
  templateUrl: './admin-orders.component.html',
  styleUrls: ['./admin-orders.component.scss'],
})
export class AdminOrdersComponent implements OnInit {

  public orderList: any = [
    {
      name: "Vivek Khamar",
      district: "Gandhinagar",
      date: "21/05/2021",
      time: "13:45",
      assigned: true
    },
    {
      name: "Neel Khamar",
      district: "Ahmedabad",
      date: "17/04/2021",
      time: "21:35",
      assigned: false
    }   
  ];

  constructor(public modalController: ModalController, private navCtrl: NavController) { }

  ngOnInit() {}

  async presentModal() {
    const modal = await this.modalController.create({
      component: RequestComponent,
      cssClass: 'my-custom-class'
    });
    return await modal.present();
  }
  goBack(){
    this.navCtrl.navigateBack('/admins');
  }

}
