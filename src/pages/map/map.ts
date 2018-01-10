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
 import { Geolocation } from '@ionic-native/geolocation';
 import { Http  } from '@angular/http';
import'rxjs/add/operator/map';


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


  constructor(public navCtrl: NavController, public navParams: NavParams,public platform:Platform,
   private http: Http  ,public geolocation: Geolocation ) {

    platform.ready().then(()=>{ 
      this.loadmap();
    })
  
  }



     loadmap(){
  
//**add gps **/
     //this.geolocation.getCurrentPosition().then((resp) => {
     // this.lat= resp.coords.latitude
     //this.long= resp.coords.longitude
     //**add gps **/


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
      // lat: this.lat,
      // lng: this.long
     },
     zoom: 18,
     tilt: 30,
     'bearing':50     
     }
      });
   
//**add gps **/
  //}).catch((error) => {
  // console.log('Error getting location', error);
 //}); 

//**add gps **/


   this.map.one(GoogleMapsEvent.MAP_READY).then(()=>{
     console.log('Map is ready .... :)');
   })
  }

   
//**add markers **/

   ionviewDidload(){   
     this.getMarkers();
   }   
   
   
   getMarkers(){
     this.http.get('assets\data\markers.json').map((res)=>res.json()).subscribe(data=>{
       this.addMarkersMap(data);
     }); 
   }
   
   addMarkersMap(markers){
   for(let marker of markers){
     var loc ={lat:marker.latitude ,lng:marker.longitude}
     marker = new google.maps.Marker({
       position : loc,
       map: this.map,
       title:marker.name,
       label:marker.content
   
     });
   
   }
   }
  //**add markers **/






  goToDetail(){
    this.navCtrl.push  (ContactPage)
  }


  ionViewDidLoad() {
    console.log('ionViewDidLoad MapPage');
  }


}
