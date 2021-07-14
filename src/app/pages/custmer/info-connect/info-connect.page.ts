// import { Component, OnInit } from '@angular/core';
// import {Connect_info} from 'src/app/models/connectinfo';
// import { AlertService } from 'src/app/services/alert.service';
// import { EnvService } from '../../../services/env.service';
// import{ HttpServiceService}  from '../../../services/http-service.service';
// import { ModalController, NavController } from '@ionic/angular';
// import { NgForm } from '@angular/forms';
// import * as moment from 'moment';

// @Component({
//   selector: 'app-info-connect',
//   templateUrl: './info-connect.page.html',
//   styleUrls: ['./info-connect.page.scss'],
// })
// export class InfoConnectPage implements OnInit {

//   info_connect: Connect_info = new Connect_info ;
//   constructor(
//     private alertService: AlertService,
//     private env: EnvService,
//     private httpService :HttpServiceService,
//     private modalController: ModalController,
//     private navCtrl: NavController,
//   ) { }

//   ngOnInit() {
//   }
  
//   submit(){
//     this.info_connect.birth_date = moment(this.info_connect.birth_date).format("YYYY-MM-DD");
//     let data = {
//       info_connect:this.info_connect
//     }
//     let data1 = {
//       time:this.info_connect.time
//     }
//     console.log(this.info_connect.time);
//     this.httpService.post('auth/time_info',data1).subscribe(
//       data => {
//         console.log('اقققققققققققققققققققققققققققققققققققققققققققق');
//       },
//     )
//     this.httpService.post('auth/infoconnects',data).subscribe(
//       data => {
//         this.alertService.presentToast("تم حفظ البيانات بنجاح");
//       },
//       error => {
//         console.log(error);
//       },
      
//       () => {
//         this.modalController.dismiss();
//         this.navCtrl.navigateForward('/home');
//       }
//       )
//       console.log('outsidepost');
//       console.log(data1);
      

//       }  

// }

import { Component, OnInit } from '@angular/core';
import {Connect_info} from 'src/app/models/connectinfo';
import { AlertService } from 'src/app/services/alert.service';
import { EnvService } from '../../../services/env.service';
import{ HttpServiceService}  from '../../../services/http-service.service';
import { ModalController, NavController } from '@ionic/angular';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';
import * as moment from 'moment';
import { Donations_info } from 'src/app/models/donations';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-info-connect',
  templateUrl: './info-connect.page.html',
  styleUrls: ['./info-connect.page.scss'],
})
export class InfoConnectPage implements OnInit {

  info_connect: Connect_info = new Connect_info ;

  donations_info:Donations_info[];

  constructor(
    private alertService: AlertService,
    private env: EnvService,
    private authService: AuthService,
    private httpService :HttpServiceService,
    private modalController: ModalController,
    private navCtrl: NavController,
    private fb: FormBuilder
  ) { }

  public addmore: FormGroup;

  ngOnInit() {
    this.addmore = this.fb.group({
      name: [null, Validators.compose([Validators.required])],
      numberphone: [null, Validators.compose([Validators.required, Validators.pattern("[0-9 ]{10}")])],
      birth_date: [null, Validators.compose([Validators.required])],
      time: [null, Validators.compose([Validators.required])],
      neighborhood_name: [null, Validators.compose([Validators.required])],
      street_name: [null, Validators.compose([Validators.required])],
      house_number: [null, Validators.compose([Validators.required])],
      nearest_landmark: [null, Validators.compose([Validators.required])],
    });
  }

  onFormSubmit(): void {
    console.log('onFormSubmit');
  }

  onSubmit(){
    this.info_connect.birth_date = moment(this.info_connect.birth_date).format("YYYY-MM-DD")
    this.info_connect.name = this.addmore.get('name').value
    this.info_connect.numberphone = this.addmore.get('numberphone').value
    this.info_connect.birth_date = moment(this.addmore.get('birth_date').value).format("YYYY-MM-DD");
    this.info_connect.time = this.addmore.get('time').value
    this.info_connect.neighborhood_name = this.addmore.get('neighborhood_name').value
    this.info_connect.street_name = this.addmore.get('street_name').value
    this.info_connect.house_number = this.addmore.get('house_number').value
    this.info_connect.nearest_landmark = this.addmore.get('nearest_landmark').value
    //shahad

    //info_connect.order_number
    let data = {
      info_connect:this.info_connect
    }
    console.log(data)
    
    this.httpService.post('auth/infoconnects', data).subscribe(
      data => {
        this.alertService.presentToast("تم حفظ البيانات بنجاح");
      },
      error => {
        console.log(error.error);
      },
      () => {
        this.modalController.dismiss();
        this.navCtrl.navigateForward('/home');
      }
    )
  }

  ionViewWillEnter(){
    this.httpService.makeGet('auth/receive_donation').subscribe(
      donations_info => {
       this.donations_info = donations_info;
       console.log('before');
       for(let i=0; i <= donations_info.length; i++){
        console.log('info connect');
        console.log(donations_info[i]);
        }      
      }
    )
  }  
}