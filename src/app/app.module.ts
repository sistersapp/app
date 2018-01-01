import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import {  HumancasePage } from '../pages/humancase/humancase';
import {  AddhumancasesPage } from '../pages/addhumancases/addhumancases';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import {  NeedingPage }  from  '../pages/needing/needing';
import {AddneedingPage }  from  '../pages/addneeding/addneeding';
import {MapPage }  from  '../pages/map/map';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { AngularFireModule} from 'angularfire2';
 import { AngularFireDatabaseModule,AngularFireDatabase } from 'angularfire2/database';
 import { AngularFireAuthModule } from 'angularfire2/auth';
 import { AngularFirestore  } from 'angularfire2/firestore';

 export const  firebaseConfig = {
  apiKey: "AIzaSyA0VKlfnYU8Oe4RS6TRu_ONiK9tsJF2-8E",
  authDomain: "humncases.firebaseapp.com",
  databaseURL: "https://humncases.firebaseio.com",
  projectId: "humncases",
  storageBucket: "humncases.appspot.com",
  messagingSenderId: "424226518349"

};




@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    NeedingPage,
    AddneedingPage,
    MapPage,
    AddhumancasesPage,
    HumancasePage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireAuthModule 
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    NeedingPage,
    AddneedingPage,
    MapPage,
    AddhumancasesPage ,
    HumancasePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
