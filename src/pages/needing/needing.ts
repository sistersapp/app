import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';


import { AngularFireDatabase ,AngularFireList ,AngularFireAction } from 'angularfire2/database'; 
import { Observable } from 'rxjs/Observable';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Subscription } from 'rxjs/Subscription';
import 'rxjs/add/operator/switchMap';
import firebase from 'firebase';


import { HomePage } from '../home/home';
import {AddneedingPage }  from  '../addneeding/addneeding';
import { ShowneedingPage }  from  '../showneeding/showneeding';


@IonicPage()
@Component({
  selector: 'page-needing',
  templateUrl: 'needing.html',
})
export class NeedingPage {

  itemsRef: AngularFireList<any>;
  devices: Observable<any[]>;
  
  
  items$: Observable<AngularFireAction<firebase.database.DataSnapshot>[]>; 
  size$: BehaviorSubject<string|null>;
  
   

  constructor(public navCtrl: NavController, public navParams: NavParams,public af:AngularFireDatabase) {
  
  

    this.itemsRef =  af.list('/device')
    this.devices= this.itemsRef.valueChanges() ;
 
   
 
    this.size$ = new BehaviorSubject(null); 
    this.items$ = this.size$.switchMap(size =>  
      af.list('/device', ref => 
        size ? ref.orderByChild('size').equalTo(size) : ref  
      ).snapshotChanges() 
    );
  
    this.items$.subscribe(actions => {
     actions.forEach(action => {
       console.log(action.type);
       console.log(action.key);
       console.log(action.payload.val());
     }); 
  
   });

  }

  itemSelected(key, firstname, lastname,address, phone,infor ){
    // console.log(key, firstname, lastname, address, phone, infor);
    this.navCtrl.push(ShowneedingPage,{
      key : key,
      firstname : firstname,
      lastname : lastname,
      address :address,    
      phone : phone ,
      infor:infor
          });  
        }









  goToMain(){
    this.navCtrl.push (HomePage)
  }

   goToAdd(){
    this.navCtrl.push (AddneedingPage)
   }
  

  ionViewDidLoad() {
    console.log('ionViewDidLoad NeedingPage');
  }

  


}
