import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-delivered',
  templateUrl: './delivered.component.html',
  styleUrls: ['./delivered.component.scss'],
})
export class DeliveredComponent implements OnInit {
  imports: [CommonModule]

  public data: any = [
    {
      driverName: "Vivek Khamar",
      requestID: "125"
    },
    {
      driverName: "Neel Patel",
      requestID: "122"
    },
    {
      driverName: "Test Driver",
      requestID: "121"
    }
  ];

  constructor(private navCtrl: NavController) { }

  ngOnInit() {}

  goBack(){
    this.navCtrl.navigateBack('/admin');
  }

}
