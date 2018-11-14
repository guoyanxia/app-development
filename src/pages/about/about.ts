import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { APage } from '../a/a';

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {
  isActive=0;
  isClick(i){
    this.isActive=i;
  }
  constructor(public navCtrl: NavController) {

  }
  goSub(){
    this.navCtrl.push(APage);
  }

}
