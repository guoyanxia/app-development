import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { JiajuPage } from '../jiaju/jiaju';

/**
 * Generated class for the MyPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-my',
  templateUrl: 'my.html',
})
export class MyPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }
  goSub(){
    this.navCtrl.push(JiajuPage);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MyPage');
  }

}
