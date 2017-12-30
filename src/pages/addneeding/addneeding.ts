import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';


import { AngularFireDatabase ,AngularFireList  } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';
import { NeedingPage } from '../needing/needing';
import *as firebase from 'firebase';


import { HomePage } from '../home/home';

@IonicPage()
@Component({
  selector: 'page-addneeding',
  templateUrl: 'addneeding.html',
})
export class AddneedingPage {
  
  peoplelist: AngularFireList<any>;

  constructor(public navCtrl: NavController, public navParams: NavParams, public af:AngularFireDatabase) {

    this.peoplelist=af.list('/device');

  }


  createDevice(firstname,lastname, address,phone,infor){
    this.peoplelist.push({
      key_id: new Date().getTime(),
        firstname :firstname ,
          lastname :lastname,
          address:address,
          phone : phone,
          infor:infor      
            
          }).then(newPerson => {
  
            this.navCtrl.push( NeedingPage);
          });
  }

  


  goToMain(){
    this.navCtrl.push (HomePage)
  }




  ionViewDidLoad() {
    console.log('ionViewDidLoad AddneedingPage');
  }







}
