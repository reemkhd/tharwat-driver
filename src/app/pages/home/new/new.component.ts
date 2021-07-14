import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import {Donations_info} from 'src/app/models/donations';
import { NavController } from '@ionic/angular';
import{ HttpServiceService} from '../../../services/http-service.service';
import { User } from 'src/app/models/user';
import { Driver } from 'src/app/models/driversModel';
import { Connect_info } from 'src/app/models/connectinfo';
import { AuthService } from 'src/app/services/auth.service';
import { EnvService } from 'src/app/services/env.service';
@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.scss'],
})
export class NewComponent implements OnInit {
  connect_info:Connect_info ;
  user: User;
  // connect_inlfo=[];
  // donations_info=[]
  donations_info:Donations_info[];
  // =[{furniture:'',clothes:'',electrical_tools:'',dishes:'',baby_things:'',luxuries:'',accessories_and_mobiles:'',medical_devices:'',miscellaneous:''}]
   ; 

  constructor(
    public modalController: ModalController,
    private navCtrl: NavController,
    private httpService :HttpServiceService,
    private authService: AuthService,
    private env: EnvService,
    ) { }

  ngOnInit() {}

tutorialShown = false;

ionViewWillEnter() {    
  this.httpService.makeGet('auth/receive_donation').subscribe( 
    
    donations_info => {
      console.log(donations_info);

     this.donations_info = donations_info
     console.log(donations_info);
      for(let i =0; i <= donations_info.length; i++){
       console.log(donations_info[i]);}
    })
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