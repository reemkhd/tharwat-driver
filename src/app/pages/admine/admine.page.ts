import { Component, OnInit } from '@angular/core';
import {Donations_info} from 'src/app/models/donations';
import { AlertService } from 'src/app/services/alert.service';
import { EnvService } from '../../services/env.service';
import { CommonModule } from '@angular/common';
import{ HttpServiceService} from '../../services/http-service.service';
import { User } from 'src/app/models/user';
import { Connect_info } from 'src/app/models/connectinfo';
import { AuthService } from 'src/app/services/auth.service';
import { ModalController } from '@ionic/angular';
import { NavController } from '@ionic/angular';



@Component({
  selector: 'app-admin',
  templateUrl: './admin.page.html',
  styleUrls: ['./admin.page.scss'],
})
export class AdminPage implements OnInit {
  imports: [CommonModule]

  //Donations_info:any;
  connect_info:Connect_info ;
  user: User;
  // connect_inlfo=[];
  // donations_info=[]
  donations_info:Donations_info[];  
  constructor(
    public modalController: ModalController,
    private navCtrl: NavController,
    private httpService :HttpServiceService,
    private authService: AuthService,
    private env: EnvService,
  ) { }

  ngOnInit() {
  } 
 //donation :any;
 tutorialShown = false;
  ionViewWillEnter() {
    this.httpService.makeGet('auth/receive_donation').subscribe( 
    
      donations_info => {
        console.log(donations_info);
  
       this.donations_info = donations_info
       console.log(donations_info);
        for(let i =0; i <= donations_info.length; i++){
         console.log(donations_info[i]);}
      
          
         // this.donation=JSON.stringify(donations_info)
             // return(donations_info[i])
             //this.shahad.push(donations_info[i]);
              // this.clothes.push(donations_info[i].clothes)
           
            // donations_info=JSON.stringify(donations_info[i]);
          //console.log(donations_info);                      
          
        //   console.log(this.donation);
        //   c
        // console.log(donations_info.donation);
         

          

 
          // console.log(this.furniture);
          // console.log(this.clothes);
          
        //if
        //   if(!this.donations_info){
        //  donations_info = {
        //       furniture :'',
        //       clothes :''
        //     }
        //   }
        },
        
        // console.log(donations_info);
        
        error => {
          console.log(error);
        },
        () => {
          
        })
          //  });
    }
  }
