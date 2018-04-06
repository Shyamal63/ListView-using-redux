import { Component } from '@angular/core';
import {  NavController, NavParams } from 'ionic-angular';


/**
 * Generated class for the QuotationPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
@Component({
  selector: 'page-quotation',
  templateUrl: 'quotation.html',
})
export class QuotationPage {
  data=[];




  constructor(public navCtrl: NavController, public navParams: NavParams) {
     let dataList=[
      {
        date:"10.12.13",
        premium:"$400",
        quotation:"Hello"
      },
      {
         date:"12.12.12",
         premium:"$600",
        quotation:"Hello world"
      },
      {
        date:"12.12.11",
        premium:"$800",
       quotation:"Hello everyone"
     }
    ];
    this.data.push(dataList)

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad QuotationPage');
  }

}
