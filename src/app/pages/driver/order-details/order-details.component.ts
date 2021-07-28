import { Component, OnInit } from '@angular/core';
import { ActionSheetController, ModalController, NavController } from '@ionic/angular';
import { Connect_info } from 'src/app/models/connectinfo';
import { Driver } from 'src/app/models/driversModel';
import { AlertService } from 'src/app/services/alert.service';
import { HttpServiceService } from 'src/app/services/http-service.service';
import { ParamService } from 'src/app/services/param.service';

@Component({
  selector: 'app-order-details',
  templateUrl: './order-details.component.html',
  styleUrls: ['./order-details.component.scss'],
})
export class OrderDetailsComponent implements OnInit {
  connect_info: Connect_info[];
  status: any;

  order_number: any;


  constructor(public modalController: ModalController, 
    public actionSheetController: ActionSheetController,
    private httpService :HttpServiceService,
    private alertService: AlertService,
    private navCtrl: NavController,
    private param : ParamService,
    ) { }

  ngOnInit() {}

  dismiss() {
    this.modalController.dismiss({
      'dismissed': true
    })
  }

  submit() {
    let data = {
      order_number: [this.order_number]
    }

    this.order_number = this.param.order_number;
    this.httpService.post('auth/update_status', data).subscribe(
      data => {
        // this.alertService.presentToast("تم تحديث البيانات بنجاح");
      },
      error => {
        console.log(error.error);
      },
      () => {
        this.modalController.dismiss();
      }
    )
  }

  ionViewWillEnter() {
    this.order_number = this.param.order_number;
    let name = 'order_number'
    this.httpService.getWithParam('auth/destroy', this.order_number, name).subscribe(
      connect_info => {
        this.connect_info = connect_info;
        console.log('connect_info inside');
        console.log(connect_info);
      },
      error => {
        console.log(error);
      }
    )
    // this.httpService.makeGet('auth/destroy').subscribe(
    //   // user => {
    //   //   this.user = user;
    //   // },
    //   connect_info => {
    //     this.connect_info = connect_info;
    //     console.log(connect_info);
    //   }
    // )
  }

}