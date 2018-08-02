import { Component } from '@angular/core';
import { NavController,NavParams } from 'ionic-angular';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

@Component({
  selector: 'page-Plug',
  templateUrl: 'Plug.html'
})
export class PlugPage {
    key;
    items;
    datafire;
  constructor(public navCtrl: NavController,public navParams:NavParams,private af: AngularFireDatabase,) {
      this.key=navParams.get('key');

  this.af.object(this.key).subscribe((data)=>{
    this.datafire=this.af.list('https://control-lamp-plug.firebaseio.com/');
      this.items={
        status:data.P1,
        status:data.P2,
        status:data.USB,
      }
      console.log(this.items)
    });
    console.log(this.key); //S1
  }
  
  update1(){
     this.datafire.update(this.key,{P1:this.items.status1})
  }
  update2(){
     this.datafire.update(this.key,{P2:this.items.status2})
  }
  update3(){
     this.datafire.update(this.key,{USB:this.items.status3})
    
  }
 
}
