// import { Component, OnInit } from '@angular/core';
// import {Donations_info} from 'src/app/models/donations';
// import { AlertService } from 'src/app/services/alert.service';
// import { EnvService } from '../../../services/env.service';
// import { CommonModule } from '@angular/common';
// import{ HttpServiceService} from '../../../services/http-service.service';
// import { AuthService } from '../../../services/auth.service';
// import { User } from 'src/app/models/user';
// //Connect_info
// import { Connect_info } from 'src/app/models/connectinfo';

// @Component({
//   selector: 'app-request',
//   templateUrl: './request.page.html',
//   styleUrls: ['./request.page.scss'],
// })
// export class RequestPage implements OnInit {

//     imports: [CommonModule]

    
//     tutorialShown = false;
//     user: User;

//    donations_info:Donations_info ;
//    public Donation_info:any[];
//    tag=[];

//     // =[{furniture:'',clothes:'',electrical_tools:'',dishes:'',baby_things:'',luxuries:'',accessories_and_mobiles:'',medical_devices:'',miscellaneous:''}]
//      ;  
//     // donations_info=[]
//     constructor(
//       private alertService: AlertService,
//       private env: EnvService,
//       private authService: AuthService,
//       private httpService :HttpServiceService
//   ) { }

//   ngOnInit() {
//   }



//   ionViewWillEnter() {
    
//     this.httpService.makeGet('auth/receive_donation').subscribe(
//       // user => {
//       //   this.user = user;
//       // },
//       donations_info => {
//        this.donations_info = donations_info
//        console.log(donations_info);
//         for(let i =0; i <= donations_info.length; i++){
//          console.log(donations_info[i]);}
//       })
//     //    this.put(this.donations_info.furniture,this.furniture)
//     //    console.log(donations_info);
//     //  for(let i =0; i <= donations_info.length; i++){
//     //   console.log(donations_info[i]);
//     //  if(this.donations_info[i] == "null"){
//     //  this.donations_info[i] ={
//     //       furniture:'',
//     //       clothes :'',
//     //       electrical_tools:'',
//     //       dishes:'',
//     //       baby_things:'',
//     //       luxuries:'',
//     //       accessories_and_mobiles:'',
//     //       medical_devices:'',
//     //       miscellaneous:''
     
//     // },
//     //  JSON.stringify(donations_info[i])}}
//     // }
//     // ,
//     //   ( error: any) => {
//     //   console.log(error);
//     // },
//     // () => {
      
//     // });
//     // this.authService.connect_info().subscribe(
//     //   connect_info => {
//     //     // this.connect_info =connect_info[0];
//     //     // console.log(connect_info[0]);
//     //     connect_info.forEach(element => {
//     //       this.connect_inlfo.push(element)
//     //     });
//     //     console.log('sss');
        
//     //     console.log(connect_ info);
//     //     console.log('sssdf');
        
//     //     console.log(this.connect_inlfo);
  
        
//     //   }
//   //   // );
//   //   this.authService.user().subscribe(
//   //     user => {
//   //       this.user =user;
//   //     }
//   //   );
//   // }
//       //  });
//   }}
import { Component, OnInit } from '@angular/core';
import {Donations_info} from 'src/app/models/donations';
import { AlertService } from 'src/app/services/alert.service';
import { EnvService } from '../../../services/env.service';
import { CommonModule } from '@angular/common';
import{ HttpServiceService} from '../../../services/http-service.service';
import { AuthService } from '../../../services/auth.service';
import { User } from 'src/app/models/user';
//Connect_info
import { Connect_info } from 'src/app/models/connectinfo';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-request',
  templateUrl: './request.page.html',
  styleUrls: ['./request.page.scss'],
})
export class RequestPage implements OnInit {

    imports: [CommonModule]

    // connect_info:Connect_info ;
    // user: User;
    // connect_inlfo=[];
    // // donations_info=[]
    // donations_info:Donations_info[];
    // // =[{furniture:'',clothes:'',electrical_tools:'',dishes:'',baby_things:'',luxuries:'',accessories_and_mobiles:'',medical_devices:'',miscellaneous:''}]
    //  ;  
    constructor(
      private alertService: AlertService,
      private env: EnvService,
      private authService: AuthService,
      private httpService :HttpServiceService,
      private navCtrl: NavController,
      
  ) { }

  // tutorialShown = false;
  ngOnInit() {
  }
  // goBack(){
  //   this.navCtrl.navigateBack('/home');
  // }
  ionViewWillEnter() {    
    // this.httpService.makeGet('auth/receive_donation').subscribe(
    //   // user => {
    //   //   this.user = user;
    //   // },
    //   donations_info => {
    //    this.donations_info = donations_info
    //    console.log(donations_info);
    //     for(let i =0; i <= donations_info.length; i++){
    //      console.log(donations_info[i]);}
      // })
    //    this.put(this.donations_info.furniture,this.furniture)
    //    console.log(donations_info);
    //  for(let i =0; i <= donations_info.length; i++){
    //   console.log(donations_info[i]);
    //  if(this.donations_info[i] == "null"){
    //  this.donations_info[i] ={
    //       furniture:'',
    //       clothes :'',
    //       electrical_tools:'',
    //       dishes:'',
    //       baby_things:'',
    //       luxuries:'',
    //       accessories_and_mobiles:'',
    //       medical_devices:'',
    //       miscellaneous:''
     
    // },
    //  JSON.stringify(donations_info[i])}}
    // }
    // ,
    //   ( error: any) => {
    //   console.log(error);
    // },
    // () => {
      
    // });
    // this.authService.connect_info().subscribe(
    //   connect_info => {
    //     // this.connect_info =connect_info[0];
    //     // console.log(connect_info[0]);
    //     connect_info.forEach(element => {
    //       this.connect_inlfo.push(element)
    //     });
    //     console.log('sss');
        
    //     console.log(connect_ info);
    //     console.log('sssdf');
        
    //     console.log(this.connect_inlfo);
  
        
    //   }
  //   // );
  //   this.authService.user().subscribe(
  //     user => {
  //       this.user =user;
  //     }
  //   );
  // }
      //  });
  }
}