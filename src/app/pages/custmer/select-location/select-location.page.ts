import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ModalController } from '@ionic/angular';

declare var google;
@Component({
  selector: 'app-select-location',
  templateUrl: './select-location.page.html',
  styleUrls: ['./select-location.page.scss'],
})
export class SelectLocationPage implements OnInit {
  map: any;
  @ViewChild('map') mapElement: ElementRef;
  constructor(
    private modalCtrl: ModalController
  ) {


    navigator.geolocation.getCurrentPosition((res) => {
      console.log("res", res);
      const { coords } = res;
      this.addMap(coords.latitude, coords.longitude);
    });
  }  

  ngOnInit() {

  }


  close(data) {
    this.modalCtrl.dismiss(data);
  }


  addMap(lat, long) {

    let latLng = new google.maps.LatLng(lat, long);

    let mapOptions = {
      center: latLng,
      zoom: 15,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    }

    this.map = new google.maps.Map(this.mapElement.nativeElement, mapOptions);
  }

  getMapCenter() {
    console.log(this.map.getCenter().lat());
    console.log(this.map.getCenter().lng());

    this.close({
      lat: this.map.getCenter().lat(),
      lng: this.map.getCenter().lng()
    })
  }

}
