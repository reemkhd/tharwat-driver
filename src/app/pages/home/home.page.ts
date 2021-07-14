import { Component, OnInit } from '@angular/core';
import {Donations_info} from 'src/app/models/donations';
import { AlertService } from 'src/app/services/alert.service';
import { EnvService } from '../../services/env.service';
import{ HttpServiceService}  from '../../services/http-service.service';
import { AuthService } from '../../services/auth.service';
import { Platform, NavController } from '@ionic/angular';
@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage  {

  constructor(
    private authService: AuthService,
    private navCtrl: NavController,
    private alertService: AlertService
  ) { }
   
  ngOnInit() {
  }

//     logout() {
//       this.authService.logout().subscribe(
//         data => {
//           this.alertService.presentToast("تم تسجيل الخروج");        
//         },
//         error => {
//           console.log(error);
//         },
//         () => {
//           this.navCtrl.navigateRoot('/login');
//         }
//       );
//     }
// }
logout = () => {
  localStorage.removeItem("token");
  localStorage.removeItem("is_admin");
  this.navCtrl.navigateRoot("/login")
}

}


