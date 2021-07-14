import { Component, OnInit } from '@angular/core';
import { ActionSheetController, ModalController } from '@ionic/angular';

@Component({
  selector: 'app-request',
  templateUrl: './request.component.html',
  styleUrls: ['./request.component.scss'],
})
export class RequestComponent implements OnInit {

  constructor(public modalController: ModalController, public actionSheetController: ActionSheetController) { }

  ngOnInit() {}

  dismiss() {
    this.modalController.dismiss({
      'dismissed': true
    })
  }

  async presentActionSheet() {
    const actionSheet = await this.actionSheetController.create({
      header: 'Drivers',
      cssClass: 'my-custom-class',
      buttons: [{
        text: 'Neel Patel',
        role: '1',
        icon: 'person',
      }, 
      {
        text: 'Vivek Khamar',
        role: '2',
        icon: 'person',
      }, 
      {
        text: 'Test Driver',
        role: '3',
        icon: 'person',
      }, 
      {
        text: 'Dummy Driver',
        role: '4',
        icon: 'person',
      },
      {
        text: 'Cancel',
        icon: 'close',
        role: 'cancel',
      }]
    });
    await actionSheet.present();

    const { role } = await actionSheet.onDidDismiss();
    if(role !== "backdrop" && role !== "cancel"){
      console.log("Selected Driver : "+ role)
    }
  }

}
