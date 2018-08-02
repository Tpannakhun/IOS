import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { LampPage } from '../lamp/lamp';
import { PlugPage } from '../plug/plug';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController,private af: AngularFireDatabase,) {
  
  }
  goToLamp(params){
    if (!params) params = {};
    this.navCtrl.push(LampPage,{key:"LampControl"});
  }
  
  goToPlug(params){
    if (!params) params = {};
    this.navCtrl.push(PlugPage,{key:"PlugControl"});
  }
  ionViewWillEnter() {     
   	this.showData();   
   }

   showData() {     
   	this.items=this.af.list('https://control-lamp-plug.firebaseio.com/').subscribe(item => console.log(item)); //ใส url ของผูอาน   
   }
}
