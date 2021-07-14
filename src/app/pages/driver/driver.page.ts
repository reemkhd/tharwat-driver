import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-driver',
  templateUrl: './driver.page.html',
  styleUrls: ['./driver.page.scss'],
})
export class DriverPage implements OnInit {

  constructor(private navCtrl: NavController) { }

  ngOnInit() {
  }

  logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("is_admin");
    this.navCtrl.navigateRoot("/login")
  }

}
