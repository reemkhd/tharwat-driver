import { Component, OnInit } from '@angular/core';
import { Connect_info } from 'src/app/models/connectinfo';
import { AlertService } from 'src/app/services/alert.service';
import { EnvService } from '../../../services/env.service';
import { HttpServiceService } from '../../../services/http-service.service';
import { ModalController, NavController } from '@ionic/angular';
import { NgForm } from '@angular/forms';
import * as moment from 'moment';
import { SelectLocationPage } from '../../src/app/pages/custmer/select-location/select-location.page';

@Component({
  selector: 'app-info-connect',
  templateUrl: './info-connect.page.html',
  styleUrls: ['./info-connect.page.scss'],
})
export class InfoConnectPage implements OnInit {

  info_connect: Connect_info = new Connect_info;
  constructor(
    private alertService: AlertService,
    private env: EnvService,
    private httpService: HttpServiceService,
    private modalController: ModalController,
  ) { }

  ngOnInit() {
  }


  async selectLocation() {
    let modal = await this.modalController.create({
      component: SelectLocationPage,

    });
    modal.present();
    modal.onDidDismiss().then((resp) => {
      if (resp.data) {
        console.log("data", resp.data);
      }
    });
  }

  submit() {
    this.info_connect.birth_date = moment(this.info_connect.birth_date).format("YYYY-MM-DD");

    let data = {
      info_connect: this.info_connect
    }
    console.log(this.info_connect);
    this.httpService.post('auth/infoconnects', data).subscribe(
      data => {
        this.alertService.presentToast("تم حفظ البيانات بنجاح");
      },
      error => {
        console.log(error.error);

      },
      () => {
        this.modalController.dismiss();


      }


    )

  }

}
