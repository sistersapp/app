import { Component } from '@angular/core';
import { NavController, NavParams  } from 'ionic-angular';

import { NeedingPage}  from   '../needing/needing';
import {MapPage}  from   '../map/map';
import {HumancasePage} from  '../humancase/humancase';
import {AboutPage} from  '../about/about';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {

  }

  goToMap(){
    this.navCtrl.push ( MapPage)
  }



  goToHumancase(){
    this.navCtrl.push ( HumancasePage)
  }


  goToNeeding(){
    this.navCtrl.push (NeedingPage)
  }



  goToAbout(){
    this.navCtrl.push ( AboutPage)
  }


}
