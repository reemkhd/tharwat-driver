import { Component, OnInit } from '@angular/core';
import { ModalController, NavController } from '@ionic/angular';
import { Router } from '@angular/router';
import { AlertService } from 'src/app/services/alert.service';
import { NgForm } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
@Component({
  selector: 'app-rest',
  templateUrl: './rest.page.html',
  styleUrls: ['./rest.page.scss'],
})
export class RestPage implements OnInit {

  constructor(
    private modalController: ModalController,
    private navCtrl: NavController,
    private route: Router,
    private alertService: AlertService,
    private authService: AuthService,
  ) { }
  ngOnInit() {
  }
  dismissReset() {
    this.modalController.dismiss();
  }
  reset(form: NgForm) {
    this.authService.reset(form.value.email).subscribe(
      data => {
        this.alertService.presentToast("Send password link");
      },
      error => {
        console.log(error);
        this.alertService.presentToast("error")
      },
      () => {
        this.dismissReset();
        this.navCtrl.navigateRoot('/dashboard');
      }
    );
  }
}