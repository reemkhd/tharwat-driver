import { Component, ElementRef, OnInit } from '@angular/core';
import { Donations_info } from 'src/app/models/donations';
import { AlertService } from 'src/app/services/alert.service';
import{ HttpServiceService}  from '../../../services/http-service.service';
import { ModalController, NavController, NavParams } from '@ionic/angular';
import { FormBuilder, FormArray, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-donation',
  templateUrl: './donation.page.html',
  styleUrls: ['./donation.page.scss'],
})

export class DonationPage implements OnInit {
  donations_info: Donations_info = new Donations_info ;
  constructor(
    private alertService: AlertService,
    private httpService :HttpServiceService,
    private modalController: ModalController,
    private navCtrl: NavController,
    private fb: FormBuilder
  ) { }
  
  public addmore: FormGroup;  
  public counter : number = 0;
  inboundClick = false;

  furniture_information=[]
  clothes_information=[]
  dishes_information=[]
  electrical_tools_information=[]
  baby_things_information=[] 
  luxuries_information=[]
  accessories_and_mobiles_information=[]
  medical_devices_information=[]
  miscellaneous_information=[]

  ngOnInit() {
  	this.addmore = this.fb.group({
      lessons: this.fb.array([])
    });
    let el: HTMLElement = document.getElementById("addButton") as HTMLElement;
    el.click();
  }
  get lessons() {
    return this.addmore.controls["lessons"] as FormArray;
  }

  add(){
    const lessonForm = this.fb.group({
      kind: ['', Validators.required],
      type: ['', Validators.required],
      number: ['', Validators.required]
    });
    this.lessons.push(lessonForm);
  }

  addOrder(lessonIndex: number) {
    this.add()
    this.counter += 1;
    this.save(lessonIndex)
  }

  save(i: number){
    let furniture = "furniture", 
    clothes = "clothes",
    dishes = "dishes",
    electrical = "electrical_tools",
    baby = "baby_things",
    luxuries = "luxuries",
    accessories = "accessories_and_mobiles",
    medical = "medical_devices",
    miscellaneous = "miscellaneous";

    if (this.lessons.value[i].kind == furniture){
      this.furniture_information.push(this.lessons.value[i].type, this.lessons.value[i].number)
    } 
    else if (this.lessons.value[i].kind == clothes){
      this.clothes_information.push(this.lessons.value[i].type, this.lessons.value[i].number)
    } 
    else if (this.lessons.value[i].kind == dishes){
      this.dishes_information.push(this.lessons.value[i].type, this.lessons.value[i].number)
    }
    else if (this.lessons.value[i].kind == electrical){
      this.electrical_tools_information.push(this.lessons.value[i].type, this.lessons.value[i].number)
    }
    else if (this.lessons.value[i].kind == baby){
      this.baby_things_information.push(this.lessons.value[i].type, this.lessons.value[i].number)
    }
    else if (this.lessons.value[i].kind == luxuries){
      this.luxuries_information.push(this.lessons.value[i].type, this.lessons.value[i].number)
    }
    else if (this.lessons.value[i].kind == accessories){
      this.accessories_and_mobiles_information.push(this.lessons.value[i].type, this.lessons.value[i].number)
    }
    else if (this.lessons.value[i].kind == medical){
      this.medical_devices_information.push(this.lessons.value[i].type, this.lessons.value[i].number)
    }
    else if (this.lessons.value[i].kind == miscellaneous){
      this.miscellaneous_information.push(this.lessons.value[i].type, this.lessons.value[i].number)
    }
  }
  
  deleteOrder(lessonIndex: number) {
    this.lessons.removeAt(lessonIndex);
  }

  submit(){
    this.save(this.counter)

    this.donations_info.furniture=this.furniture_information.toString().replace(/"/g,"");
    this.donations_info.clothes=this.clothes_information.toString();
    this.donations_info.dishes=this.dishes_information.toString();
    this.donations_info.electrical_tools=this.electrical_tools_information.toString();
    this.donations_info.baby_things=this.baby_things_information.toString();
    this.donations_info.luxuries=this.luxuries_information.toString();
    this.donations_info.medical_devices=this.medical_devices_information.toString();
    this.donations_info.accessories_and_mobiles=this.accessories_and_mobiles_information.toString();
    this.donations_info.miscellaneous=this.miscellaneous_information.toString();

    let data = {
      donations_info:this.donations_info
    }

    console.log(this.donations_info)
    this.httpService.post('auth/donations', data).subscribe(
      data => {
        this.alertService.presentToast("تم حفظ البيانات بنجاح");
      },
      error => {
        console.log(error.error);
      },
      () => {
        this.modalController.dismiss();
        this.navCtrl.navigateForward('/info-connect');
      }
    )
  }
}
// import { Component, OnInit } from '@angular/core';
// import {Donations_info} from 'src/app/models/donations';
// import { AlertService } from 'src/app/services/alert.service';
// import { EnvService } from '../../../services/env.service';
// import{ HttpServiceService}  from '../../../services/http-service.service';
// import { ModalController, NavController } from '@ionic/angular';
// import { NgForm } from '@angular/forms';

// @Component({
//   selector: 'app-donation',
//   templateUrl: './donation.page.html',
//   styleUrls: ['./donation.page.scss'],
// })

// export class DonationPage implements OnInit {
//   donations_info: Donations_info = new Donations_info ;
//   constructor(
//     private alertService: AlertService,
//     private env: EnvService,
//     private httpService :HttpServiceService,
//     private modalController: ModalController,
//     private navCtrl: NavController,
//   ) { }

//   ngOnInit() {
//   }

//   item_qty=[1];
//   donationList:string;

//   furniture_information=[]
//   clothes_information=[]
//   dishes_information=[]
//   electrical_tools_information=[]
//   baby_things_information=[] 
//   luxuries_information=[]
//   accessories_and_mobiles_information=[]
//   medical_devices_information=[]
//   miscellaneous_information=[]

  
//   addToArray(form: NgForm){
//     let furniture = "furniture", 
//     clothes = "clothes", 
//     dishes="dishes", 
//     electrical="electrical_tools", 
//     baby="baby_things", 
//     luxuries="luxuries", 
//     accessories="accessories_and_mobiles", 
//     medical="medical_devices", 
//     miscellaneous="miscellaneous";

//     if (form.value.donationList == furniture){
//       this.furniture_information.push(form.value.type, form.value.number)
//     } 
//     else if (form.value.donationList== clothes){
//       this.clothes_information.push(form.value.type, form.value.number)
//     }
//     else if (form.value.donationList == dishes){
//       this.dishes_information.push(form.value.type, form.value.number)
//     }
//     else if (form.value.donationList == electrical){
//       this.electrical_tools_information.push(form.value.type, form.value.number)
//     }
//     else if (form.value.donationList == baby){
//       this.baby_things_information.push(form.value.type, form.value.number)
//     }
//     else if (form.value.donationList == luxuries){
//       this.luxuries_information.push(form.value.type, form.value.number)
//     }
//     else if (form.value.donationList == accessories){
//       this.medical_devices_information.push(form.value.type, form.value.number)
//     }
//     else if (form.value.donationList == medical){
//       this.accessories_and_mobiles_information.push(form.value.type, form.value.number)
//     }
//     else if (form.value.donationList == miscellaneous){
//       this.miscellaneous_information.push(form.value.type, form.value.number)
//     }
//   }  

//   add(){
//     this.item_qty.push(2)
//     console.log(this.furniture_information,this.clothes_information,this.dishes_information,this.baby_things_information,this.luxuries_information,this.accessories_and_mobiles_information,this.medical_devices_information,this.miscellaneous_information)
//   }
//   remove(){//add
//     this.item_qty.pop();
//     console.log(this.furniture_information,this.clothes_information,this.dishes_information,this.baby_things_information,this.luxuries_information,this.accessories_and_mobiles_information,this.medical_devices_information,this.miscellaneous_information)
//   }
//   submit(){
//     this.donations_info.furniture=this.furniture_information.toString().replace(/"/g,"");
//     this.donations_info.clothes=this.clothes_information.toString();
//     this.donations_info.dishes=this.dishes_information.toString();
//     this.donations_info.electrical_tools=this.electrical_tools_information.toString();
//     this.donations_info.baby_things=this.baby_things_information.toString();
//     this.donations_info.luxuries=this.luxuries_information.toString();
//     this.donations_info.medical_devices=this.medical_devices_information.toString();
//     this.donations_info.accessories_and_mobiles=this.accessories_and_mobiles_information.toString();
//     this.donations_info.miscellaneous=this.miscellaneous_information.toString();
//     //this.donations_info.birth_date=this.birth_date_information;

//     let data = {
//       donations_info:this.donations_info
//     }
   
//     //this.donations_info.furniture=this.home_furniture;

//     console.log(this.donations_info)
//     this.httpService.post( 'auth/donations', data).subscribe(
//       data => {
//         this.alertService.presentToast("تم حفظ البيانات بنجاح");
//       },
//       error => {
//         console.log(error.error);
//       },
//       () => {
//         this.modalController.dismiss();
//         this.navCtrl.navigateForward('/info-connect');

      
//       }
//     )
//   }
// }