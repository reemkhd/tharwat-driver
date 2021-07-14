
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { ModalController, NavController } from '@ionic/angular';
import { RegisterPage } from '../register/register.page';
import { AuthService } from 'src/app/services/auth.service';
import { AlertService } from 'src/app/services/alert.service';
import { RestPage } from 'src/app/pages/custmer/rest/rest.page'

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
 

  constructor(
    private modalController: ModalController,
    private authService: AuthService,
    private navCtrl: NavController,
    private alertService: AlertService,

  ) { }

  ngOnInit() {
  }

  checked : boolean = false;// amon
	rot :string;
  rememberMe(): void {
  	this.checked = !this.checked;
  	// console.log("checked: " + this.checked);//it is working !!!
  }
  // Dismiss Login Modal
  dismissLogin() {
    this.modalController.dismiss();
  }

  // On Register button tap, dismiss login modal and open register modal
  async registerModal() {
    this.dismissLogin();
    const registerModal = await this.modalController.create({
      component: RegisterPage
    });
    return await registerModal.present();
  }

  login(form: NgForm) {
    this.authService.login(form.value.email, form.value.password).subscribe(
      data => {
        localStorage.setItem('token', data.access_token);
       localStorage.setItem('is_admin', data.is_admin);

        this.alertService.presentToast("تم تسجيل الدخول");
        console.log(data)
      },
      error => {
        this.alertService.presentToast("خطأ في اسم المستخدم أو كلمة المرور");
        console.log(error);
      },
      () => {
        this.dismissLogin();
       this.rot= localStorage.getItem('is_admin');

        this.navCtrl.navigateRoot(this.rot);
      }
    );
  }
  async showForgetPassword(){
    const forgetModal = await this.modalController.create({
      component: RestPage,
    });
    return await forgetModal.present();
  }
}
