import { Component } from '@angular/core';
import {/*  IonicPage, */ NavController, NavParams } from 'ionic-angular';
// import { ModalController} from 'ionic-angular';
// import { BPage } from '../b/b';
/**
 * Generated class for the APage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

// @IonicPage()
@Component({
  selector: 'page-a',
  templateUrl: 'a.html',
})
export class APage {

  constructor(public navCtrl: NavController, public navParams: NavParams/* public modalCtrl: ModalController */) {
  }

  ionViewDidLoad() {
    // console.log('ionViewDidLoad APage');
    // let profileModal = this.modalCtrl.create(BPage);
    // profileModal.present();
  }

}
