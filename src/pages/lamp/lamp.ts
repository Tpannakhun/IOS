import { Component } from '@angular/core';
import { NavController,NavParams } from 'ionic-angular';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

@Component({
  selector: 'page-lamp',
  templateUrl: 'lamp.html'
})
export class LampPage {
    key;
    items;
    datafire;
  constructor(public navCtrl: NavController,public navParams:NavParams,private af: AngularFireDatabase,) {
      this.key=navParams.get('key');

  this.af.object(this.key).subscribe((data)=>{
    this.datafire=this.af.list('https://control-lamp-plug.firebaseio.com/');
      this.items={
        status:data.S1,
        status:data.S2,
        status:data.S3,
        status:data.S4,
        range:data.Slider1,
        range:data.Slider2,
        range:data.Slider3,
        range:data.Slider4,
        amount:data.amount
      }
      console.log(this.items)
    });
    console.log(this.key); //S1
  }
  
  update1(){
     this.datafire.update(this.key,{S1:this.items.status1})
  }
  update2(){
     this.datafire.update(this.key,{S2:this.items.status2})
  }
  update3(){
     this.datafire.update(this.key,{S3:this.items.status3})
  }
  update4(){
     this.datafire.update(this.key,{S4:this.items.status4})
  }
  update_range1(){
    this.datafire.update(this.key,{Slider1:this.items.range1})
  }
  update_range2(){
    this.datafire.update(this.key,{Slider2:this.items.range2})
  }
  update_range3(){
    this.datafire.update(this.key,{Slider3:this.items.range3})
  }
  update_range4(){
    this.datafire.update(this.key,{Slider4:this.items.range4})
  }
}

