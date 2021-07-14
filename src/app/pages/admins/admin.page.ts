import { Component, OnInit } from '@angular/core';
import {Donations_info} from 'src/app/models/donations';
import { AlertService } from 'src/app/services/alert.service';
import { EnvService } from './../../services/env.service';
import { CommonModule } from '@angular/common';
import{ HttpServiceService} from './../../services/http-service.service';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.page.html',
  styleUrls: ['./admin.page.scss'],
})
export class AdminPage implements OnInit {
  imports: [CommonModule]

  //Donations_info:any;
  donations_info: Donations_info;
  constructor(
    private alertService: AlertService,
    private env: EnvService,
    private httpService :HttpServiceService,
    private navCtrl: NavController
  ) { }

  ngOnInit() {
  }
 //donation :any;
 
  ionViewWillEnter() {
    
      this.httpService.makeGet('auth/receive_donation').subscribe(
        donations_info => {
         this.donations_info =donations_info
         //this.put(this.donations_info.furniture,this.furniture)
         console.log(donations_info);
       for(let i =0; i <= donations_info.length; i++){
        console.log(donations_info[i]);
        if(this.donations_info[i] == "null"){
       this.donations_info[i] ={
            furniture:'',
            clothes :''
       }
       
       JSON.stringify(donations_info[i])

        }}
          
          
          

          
         // this.donation=JSON.stringify(donations_info)
             // return(donations_info[i])
             //this.shahad.push(donations_info[i]);
              // this.clothes.push(donations_info[i].clothes)
          //  } } 
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

    logout = () => {
      localStorage.removeItem("token");
      localStorage.removeItem("is_admin");
      this.navCtrl.navigateRoot("/login")
    }
  }
