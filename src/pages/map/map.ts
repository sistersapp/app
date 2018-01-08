import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { ContactPage } from '../contact/contact';



@IonicPage()
@Component({
  selector: 'page-map',
  templateUrl: 'map.html',
})
export class MapPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }


  goToDetail(){
    this.navCtrl.push  (ContactPage)
  }


  ionViewDidLoad() {
    console.log('ionViewDidLoad MapPage');
  }


}
