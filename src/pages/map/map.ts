import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Platform } from 'ionic-angular';
import { ContactPage } from '../contact/contact';

import {
  GoogleMaps,
  GoogleMap,
  GoogleMapsEvent,
  GoogleMapOptions,
  CameraPosition,
  MarkerOptions,
  Marker
 } from '@ionic-native/google-maps';

 

 declare var google;



@IonicPage()
@Component({
  selector: 'page-map',
  templateUrl: 'map.html',
})
export class MapPage {

  map: GoogleMap;
  lat=0;
  long=0;


  constructor(public navCtrl: NavController, public navParams: NavParams,public platform:Platform
    ) {

    platform.ready().then(()=>{ 
      this.loadmap();
    })
  
  }



     loadmap(){
   this.map = new GoogleMap('map',{
    'controls': {
   'compass':true,
   'myLocationButton':true,
   'indoorPicker':true,
   'zoom':true
    },
    'gestures':{
      'scroll':true,
      'tilt':true,
      'rotate':true,
      'zoom':true
      },
    'camera':{
     target: {
       lat: 43.0741904,
      lng: -89.3809802
     
     },
     zoom: 18,
     tilt: 30,
     'bearing':50     
     }
      });
   


   this.map.one(GoogleMapsEvent.MAP_READY).then(()=>{
     console.log('Map is ready .... :)');
   })
  }

   





  goToDetail(){
    this.navCtrl.push  (ContactPage)
  }


  ionViewDidLoad() {
    console.log('ionViewDidLoad MapPage');
  }


}
