import { Component } from '@angular/core';

import { AboutPage } from '../about/about';
import {ContactPage } from '../contact/contact';
import {  HumancasePage } from '../humancase/humancase';
import {  AddhumancasesPage } from '../addhumancases/addhumancases';
import { HomePage } from '../home/home';
import {  NeedingPage }  from  '../needing/needing';
import {AddneedingPage }  from  '../addneeding/addneeding';
import { MapPage }  from  '../map/map';
@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root =  HumancasePage;
  tab3Root =AddhumancasesPage;  
  tab4Root = MapPage;
  tab5Root =  NeedingPage;
  tab6Root =  AddneedingPage;
  tab7Root = AboutPage;
  tab8Root = ContactPage;
  
  constructor() {

  }
}
